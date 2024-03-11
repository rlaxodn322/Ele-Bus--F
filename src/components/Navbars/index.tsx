import React, { FC, useEffect, useState } from 'react';
import { IconImage, Layout, Menu, MenuIconWrapper, MenuWrapper } from './style';
import { routes } from '../../../routes';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MainNavbar: FC = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [openHamburger, setOpenHamburger] = useState(true);
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
  const [openDashboardMenu2, setOpenDashboardMenu2] = useState(false);
  const [openDashboardMenu3, setOpenDashboardMenu3] = useState(false);
  const [openDashboardMenu4, setOpenDashboardMenu4] = useState(false);

  const router = useRouter();
  useEffect(() => {
    // 여기에 로그인 상태를 확인하는 로직을 추가
    // 예: 세션 스토리지, 쿠키, 서버에서 확인하는 등
    const checkLoginStatus = () => {
      // 예시: 세션 스토리지에서 로그인 정보 가져오기
      const isLoggedInFromStorage = Boolean(sessionStorage.getItem('userData'));
      setIsLoggedIn(isLoggedInFromStorage);
      const userDataFromStorage = JSON.parse(sessionStorage.getItem('userData') || '{}');
      setUserRole(userDataFromStorage.admin);
    };

    checkLoginStatus();
  }, []); // 페이지가 로드될 때 한 번만 실행

  const onChangeMenu = (e: any) => {
    const id = e.target.id;
    // if (id === 'hamburger') setOpenHamburger(!openHamburger);
    if (id === 'dashboard') setOpenDashboardMenu(!openDashboardMenu);
    else if (id === 'login') setOpenDashboardMenu2(!openDashboardMenu2);
    else if (id === 'dashboard3') setOpenDashboardMenu3(!openDashboardMenu3);
    else if (id === 'dashboard4') setOpenDashboardMenu4(!openDashboardMenu4);
  };
  // 로그인되어 있지 않다면 네비게이션을 숨깁니다.
  if (!isLoggedIn) {
    return null;
  }
  return (
    <>
      <Layout>
        <MenuIconWrapper>
          <div onClick={onChangeMenu} id={'hamburger'} />
        </MenuIconWrapper>
        <Menu>
          <MenuWrapper>
            {routes &&
              routes.map((item, i) => {
                const isSelected = router.route === item.router;
                const liStyle = isSelected ? { borderRight: '3px solid #808080' } : {};

                // 여기서 userRole에 따라 메뉴를 보여주거나 숨깁니다.
                const isAdmin = userRole === '01';
                const shouldShowMenu =
                  isAdmin ||
                  (userRole === '02' &&
                    (item.router === '/' || item.router === '/auth/car' || item.router === '/auth/dtg'));

                if (!shouldShowMenu) {
                  return null;
                }

                return (
                  <li key={item.name + i} style={liStyle}>
                    <Link href={item.router}>
                      <IconImage src={isSelected ? item.active : item.default} />
                      <label style={{ fontWeight: isSelected ? 400 : 'normal' }}>{item.name}</label>
                    </Link>
                  </li>
                );
              })}
          </MenuWrapper>
        </Menu>
      </Layout>
    </>
  );
};

export default MainNavbar;
