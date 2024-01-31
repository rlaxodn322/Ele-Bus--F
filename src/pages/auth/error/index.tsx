import React from 'react';
import MainLayout from '../../../layouts';
import { Page } from './style';
import Left from '../../../components/error/left';
import Right from '../../../components/error/right';
import Middle from '../../../components/error/middle';
const MyPage = () => {
  return (
    <>
      <Page>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <Left />
          <Middle />
          <Right />
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
