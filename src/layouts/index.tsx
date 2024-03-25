import MainHeader from '../components/Headers';
import MainNavbar from '../components/Navbars';
// import MainFooter from '../components/Footers';
import { ContentsWrapper, Layout } from './style';
import ScrollToTopButton from '../components/Scroll/ScrollToTopButton';
import ScrollToDownButton from '../components/Scroll/ScrollToDownButton';
import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  };
  const handleScrollToDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      // behavior: 'smooth',
    });
  };
  return (
    <>
      <Layout>
        <MainHeader />
        <MainNavbar />
        <ContentsWrapper>{children}</ContentsWrapper>
        {/* <MainFooter></MainFooter> */}
        <ScrollToTopButton handleScrollToTop={handleScrollToTop}></ScrollToTopButton>
        <ScrollToDownButton handleScrollToDown={handleScrollToDown}></ScrollToDownButton>
      </Layout>
    </>
  );
};

export default MainLayout;
