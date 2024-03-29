import Head from 'next/head';
import { Button, Form, Modal } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import MainLayout from '../../../layouts';
import { logInAPI } from '../../../components/apis/user/user';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import Link from 'next/link';
import EmailForm from '../../../components/apis/mail';
const CheckError = styled.button`
  font-size: 10px;
  color: red;
  border: none;
  background-color: transparent;
  margin-left: 4px;

  &:focus {
    outline: none;
  }
`;
const PageLogin = styled(Form)`
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  /* @media (max-width: 768px) {
    margin: 0;
    margin-left: -80px;
  } */
`;

const LoginTitle = styled.div`
  margin: 20px;
  font-size: 24px; /* Adjust font size as needed */
`;

const LoginBar = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 6px;
  margin: 10px;
  background-color: white;
  color: #808080;

  &:focus-within {
    box-shadow: 0 0 0 2px #4285f4;
    color: #808080;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 24px;
  padding: 8px;
  font-size: 14px;
  background-color: white;
  color: #808080;

  &:focus {
    outline: none;
    color: #808080;
  }
`;

const ButtonWrapper = styled.div`
  width: 40%;
  display: flex;

  margin-top: 20px;
`;

const LoginPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState(false);
  // const setUserData = useSetRecoilState(userState);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // 모달 열고 닫는 상태 및 함수 정의
  const [modalVisible, setModalVisible] = useState(false);

  // 모달 열기 함수
  const showModal = () => {
    setModalVisible(true);
  };

  // 모달 닫기 함수
  const handleCancel = () => {
    setModalVisible(false);
  };
  // 이메일 전송 성공 시 모달 닫기
  const handleEmailSent = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('userData');
    if (isLoggedIn) {
      router.push('/');
    }
  }, [router]);

  const emailCheck = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loginStart();
    }
  };

  const loginStart = () => {
    if ((email.length === 0 || emailError) && emailRef.current) {
      setEmailError(true);
      emailRef.current.focus();
      return;
    } else if (password.length === 0 && passwordRef.current) {
      passwordRef.current.focus();
      return;
    }
    Login();
  };

  const Login = () => {
    console.log('login 이메일 : ', email, ', 비밀번호 : ', password);
    onSubmitForm();
  };

  const mutation = useMutation(['email'], logInAPI, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (email) => {
      const userData = queryClient.setQueryData(['email'], email);

      if (userData !== null && Object.keys(userData).length > 0) {
        if (userData.admin === '03') {
          // 만약 admin 값이 '03'이면 권한이 없는 경우
          Swal.fire({
            icon: 'error',
            title: '관리자에게 문의해주세요.',
            text: '액세스 권한을 확인해주세요.',
            timer: 2000,
          });
          return;
        }

        // 권한이 있는 경우 로그인 성공 처리
        sessionStorage.setItem('userData', JSON.stringify(userData));
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: 'success',
          title: '로그인 성공.',
        });
        router.push('../').then(() => {
          window.location.reload();
        });
      }
    },
    onSettled: () => {
      setLoading(false);
    },
    onError: (error) => {
      console.error('로그인 오류:', error);
      Swal.fire({
        icon: 'error',
        title: '로그인 실패',
        html: '이메일 또는 비밀번호를 잘못 입력했습니다.</br> 입력하신 내용을 다시 확인해주세요.',
        timer: 2000,
      });
    },
  });

  const onSubmitForm = useCallback(() => {
    console.log('test : ', email, ', 비밀번호 : ', password);
    mutation.mutate({ email, password });
  }, [email, password, mutation]);

  return (
    <>
      <Head>
        <title>로그인</title>
        <meta name="description" content="login" />
      </Head>
      <PageLogin onFinish={onSubmitForm}>
        <LoginTitle>로그인</LoginTitle>
        <LoginBar>
          <SearchInput
            type="email"
            placeholder="이메일"
            name="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={emailCheck}
            onKeyPress={handleKeyPress}
            ref={emailRef}
            required
          />
        </LoginBar>
        {emailError && <CheckError>- 이메일 형식이 잘못되었습니다.</CheckError>}
        <LoginBar>
          <SearchInput
            type="password"
            placeholder="비밀번호"
            name="userPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            maxLength={100}
            ref={passwordRef}
            required
          />
        </LoginBar>
        <ButtonWrapper>
          <Button
            style={{ marginRight: '10px' }}
            size="large"
            primary-color="true"
            onClick={loginStart}
            loading={loading}
          >
            로그인
          </Button>
          <span className="button-gap" />
          <Link href="/auth/signup">
            {/* 변경 */}
            <Button style={{ marginRight: '10px' }} size="large" primary-color="true">
              회원가입
            </Button>
          </Link>
          <Button style={{ marginRight: '10px' }} size="large" primary-color="true" onClick={showModal}>
            권한상향
          </Button>
        </ButtonWrapper>
      </PageLogin>
      <Modal title="권한 상향" open={modalVisible} onCancel={handleCancel} footer={null} onOk={handleCancel}>
        {/* EmailForm 컴포넌트를 모달 안에 렌더링 */}
        <EmailForm
          onSuccess={handleEmailSent}
          placeholder="회사명, 이름, 직책, 사용자 권한 상향 사유를 입력해주세요."
        />
      </Modal>
    </>
  );
};

LoginPage.layout = MainLayout;

export default LoginPage;
