import Head from 'next/head';
import { CheckError, PageLogin, LoginBar, LoginTitle, SearchInput, ButtonWrapper } from './style';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import MainLayout from '../../../layouts';
import { logInAPI } from '../../../components/apis/user/user';
import { useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import { userState } from '../../../recoil/modal/index';
// import '../styles/variables.less';

const LoginPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState(false);
  const setUserData = useSetRecoilState(userState);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {});

  // 이메일 확인
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

  // 로그인
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

  // 로그인2
  const Login = () => {
    console.log('login 이메일 : ', email, ', 비밀번호 : ', password);
    onSubmitForm();
  };

  const mutation = useMutation(['email'], logInAPI, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (email) => {
      queryClient.setQueryData(['email'], email);
      const userData = queryClient.setQueryData(['email'], email);
      setUserData(userData);

      // 로그인시 sessionStorage에 userData저장
      if (userData !== null && Object.keys(userData).length > 0) {
        sessionStorage.setItem('userData', JSON.stringify(userData));
      }
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
            // maxLength={30}
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
          <Button size="large" onClick={loginStart} loading={loading}>
            로그인
          </Button>
          <span className="button-gap" />
          <a href="/auth/signup">
            <Button size="large" primary-color="true">
              회원가입
            </Button>
          </a>
        </ButtonWrapper>
      </PageLogin>
    </>
  );
};

LoginPage.layout = MainLayout;

export default LoginPage;
