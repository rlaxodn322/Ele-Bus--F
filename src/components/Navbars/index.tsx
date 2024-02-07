import React, { FC, useState } from 'react';
import { IconImage, Layout, Menu, MenuIconWrapper, MenuWrapper } from './style';
import { routes } from '../../../routes';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MainNavbar: FC = () => {
  // const [openHamburger, setOpenHamburger] = useState(true);
  const [openDashboardMenu, setOpenDashboardMenu] = useState(false);
  const [openDashboardMenu2, setOpenDashboardMenu2] = useState(false);
  const [openDashboardMenu3, setOpenDashboardMenu3] = useState(false);
  const [openDashboardMenu4, setOpenDashboardMenu4] = useState(false);

  const router = useRouter();

  const onChangeMenu = (e: any) => {
    const id = e.target.id;
    // if (id === 'hamburger') setOpenHamburger(!openHamburger);
    if (id === 'dashboard') setOpenDashboardMenu(!openDashboardMenu);
    else if (id === 'login') setOpenDashboardMenu2(!openDashboardMenu2);
    else if (id === 'dashboard3') setOpenDashboardMenu3(!openDashboardMenu3);
    else if (id === 'dashboard4') setOpenDashboardMenu4(!openDashboardMenu4);
  };

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
                return (
                  <li key={item.name + i} style={liStyle}>
                    <Link href={item.router}>
                      <IconImage src={isSelected ? item.active : item.default} />
                      <label style={{ fontWeight: isSelected ? 400 : 'normal' }}>{item.name}</label>
                      {/* <a>
                      
                      </a> */}
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
