import Head from 'next/head';
import React, { useState, useCallback, useRef } from 'react';
import MainLayout from '../../../layouts';
// import { CheckError, TitleWrapper, PageSignUp, SignUpBar, SignUpInput, ButtonWrapper } from './style';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { signUpAPI } from '../../../components/apis/user/user';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';

const CheckError = styled.button`
  font-size: 10px;
  color: red;
  border: none;
  background-color: transparent;
  margin-left: 4px;
  /* tabindex= -1; */

  &:focus {
    outline: none;
  }
`;

const TitleWrapper = styled.div`
  padding: 20px; /* 텍스트 박스와 영역 사이의 여백 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const TextBox = styled.div`
//   color: #ffffff; /* 원하는 텍스트 색상으로 변경 */
//   font-size: 2rem; /* 원하는 텍스트 크기로 변경 */
//   text-align: left;
//   user-select: none;
//   background-color: white;
// `;

const PageSignUp = styled.div`
  //margin-top: 0%;
  width: 100%;
  height: 750px;
  padding-left: 40%;
  background-color: white;
  @media (max-width: 1100px) {
    padding-left: 20%;
  }
`;

const SignUpBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 6px;
  margin: 10px;
  width: 300px;
  &:focus-within {
    box-shadow: 0 0 0 2px #4285f4;
  }
  @media (max-width: 1100px) {
    width: 200px;
  }
`;

const SignUpInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 24px;
  padding: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 71%;
  padding-left: 0%;
  @media (max-width: 1100px) {
    margin-right: 73%;
    @media (max-width: 700px) {
      margin-right: 50%;
    }
    @media (max-width: 400px) {
      margin-right: 25%;
    }
  }
`;

const Signup = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const router = useRouter();
  const admin = '03';
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // 이름 확인
  const nameCheck = () => {
    if (name.length < 2 || name.length > 15) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  // 이메일 확인
  const emailCheck = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = email;
    if (!emailRegex.test(emailCurrent)) {
      setEmailErrorMessage('이메일 형식이 잘못되었습니다.');
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  // 비밀번호 확인
  const passwordCheck = () => {
    if (password !== password2) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !Swal.isVisible()) {
      e.preventDefault();
      Sign();
    }
  };

  // 가입하기
  const Sign = () => {
    if (nameError || emailError || passwordError) {
      if (nameError && nameRef.current) {
        nameRef.current.focus();
        return;
      } else if (emailError && emailRef.current) {
        emailRef.current.focus();
        return;
      } else if (passwordError && passwordRef.current) {
        passwordRef.current.focus();
        return;
      }
      return;
    }
    if (name.length === 0 && nameRef.current) {
      setNameError(true);
      nameRef.current.focus();
      return;
    } else if (email.length === 0 && emailRef.current) {
      setEmailError(true);
      setEmailErrorMessage('이메일 형식이 잘못되었습니다.');
      emailRef.current.focus();
      return;
    } else if (password.length === 0 && passwordRef.current) {
      setPasswordError(true);
      passwordRef.current.focus();
      return;
    } else if (password2.length === 0 && passwordRef.current) {
      setPasswordError(true);
      passwordRef.current.focus();
      return;
    }
    if (password != password2 && passwordRef.current) {
      setPasswordError(true);
      passwordRef.current.focus();
      return;
    }
    onSubmitForm();
    console.log(name, email, password);
  };

  const mutation = useMutation(['user'], signUpAPI, {
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: 'success',
        title: '성공적으로 회원가입되었습니다.',
      });
      router.push('../auth/login');
    },
    onSettled: () => {
      setLoading(false);
    },
    onError: (error) => {
      console.error('로그인 오류:', error);
      const swalPromise = Swal.fire({
        icon: 'error',
        title: '회원가입 실패',
        html: '이미 사용중인 이메일 입니다.',
        timer: 2000,
        focusConfirm: false,
      });
      swalPromise.then(() => {
        setEmailError(true);
        setEmailErrorMessage('이미 사용중이거나 탈퇴한 아이디입니다.');
        if (emailRef.current && document.activeElement !== emailRef.current) {
          emailRef.current.focus();
        }
      });
    },
  });

  const onSubmitForm = useCallback(() => {
    console.log('email : ', email, ', password : ', password, ', name : ', password);
    mutation.mutate({ email, password, name, admin });
  }, [email, password, name, admin, mutation]);

  return (
    <>
      <Head>
        <title>회원가입</title>
        <meta name="description" content="회원가입" />
      </Head>
      <form>
        <PageSignUp>
          <h3 style={{ marginLeft: '10px' }}>회원가입</h3>
          <TitleWrapper></TitleWrapper>
          <SignUpBar>
            <SignUpInput
              type="name"
              placeholder="이름"
              name="user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyUp={nameCheck}
              maxLength={20}
              onKeyDown={handleKeyDown}
              ref={nameRef}
              required
            />
          </SignUpBar>
          {nameError && <CheckError>- 2글자 이상 20글자 미만으로 입력해주세요.</CheckError>}
          <SignUpBar>
            <SignUpInput
              type="email"
              placeholder="이메일"
              name="user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyUp={emailCheck}
              maxLength={30}
              onKeyDown={handleKeyDown}
              ref={emailRef}
              required
            />
          </SignUpBar>
          {emailError && <CheckError>- {emailErrorMessage}</CheckError>}
          <SignUpBar>
            <SignUpInput
              type="password"
              placeholder="비밀번호"
              name="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={passwordCheck}
              maxLength={100}
              onKeyDown={handleKeyDown}
              ref={passwordRef}
              required
            />
          </SignUpBar>
          <SignUpBar>
            <SignUpInput
              type="password"
              placeholder="비밀번호확인"
              name="user-password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              onKeyUp={passwordCheck}
              maxLength={100}
              onKeyDown={handleKeyDown}
              required
            />
          </SignUpBar>
          {passwordError && <CheckError>- 비밀번호가 일치하지 않습니다.</CheckError>}
          <br />
          <ButtonWrapper>
            <Button size="large" onClick={Sign} loading={loading}>
              가입하기
            </Button>
          </ButtonWrapper>
        </PageSignUp>
      </form>
    </>
  );
};

Signup.layout = MainLayout;

export default Signup;
