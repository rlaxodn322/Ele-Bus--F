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
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    // Update date every day
    const intervalId = setInterval(
      () => {
        setCurrentDate(new Date().toLocaleDateString());
      },
      24 * 60 * 60 * 1000,
    ); // Update every 24 hours

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    // ... (your existing logout logic)
  };

  return (
    <Layout>
      <LogoWrapper>
        <Link href="../">
          <a>
            <img src={'/images/FirstLogo.jpeg'} alt="Logo" />
          </a>
        </Link>

        <ButtonWrapper>
          <div style={{ color: '#808080', margin: '10px', fontSize: '15px' }}>{currentDate}</div>
          <div style={{ marginRight: '30px' }}>
            <Weather />
          </div>

          <LoginButton isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        </ButtonWrapper>
      </LogoWrapper>
    </Layout>
  );
};

export default MainLogo;
