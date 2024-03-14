// LoginButton.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from 'antd';

interface LoginButtonProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoggedIn, handleLogout }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Link href="/auth/mypage">
            <Button>마이페이지</Button>
          </Link>
          <Button onClick={handleLogout}>로그아웃</Button>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <Button>로그인</Button>
          </Link>
          {/* <Link href="/auth/signup">
            <Button>회원가입</Button>
          </Link> */}
        </>
      )}
    </>
  );
};

export default LoginButton;
