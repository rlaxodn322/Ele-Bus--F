import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LogoWrapper, ButtonWrapper } from './style';
import { Layout } from 'antd';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Weather from '../apis/weather';
import LoginButton from '../antd/loginbutton';

const MainLogo = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '로그아웃',
      cancelButtonText: '취소',
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 500,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: 'success',
          title: '로그아웃 성공.',
        });
        sessionStorage.removeItem('userData');
        router.push('/auth/login').then(() => {
          window.location.reload();
        });
      }
    });
  };
  return (
    <Layout>
      <LogoWrapper>
        <Link href="../">
          <img src={'/images/FirstLogo.jpeg'} alt="Logo" />
        </Link>
        <ButtonWrapper>
          <Weather />
          <LoginButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </ButtonWrapper>
      </LogoWrapper>
    </Layout>
  );
};

export default MainLogo;
