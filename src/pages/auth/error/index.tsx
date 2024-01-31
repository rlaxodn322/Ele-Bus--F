import React from 'react';
import MainLayout from '../../../layouts';
import { Page } from './style';
import Left from '../../../components/error/left';
import Right from '../../../components/error/right';
import Middle from '../../../components/error/middle';
import BusCard from '../../../components/bus/buscard';
const MyPage = () => {
  return (
    <>
      <Page>
        <BusCard />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '80%',
            marginTop: '20px',
          }}
        >
          <div style={{ width: '100%' }}>
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>수원여객차량</h1>
            <Left />
          </div>
          <div style={{ width: '100%' }}>
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>123호 1234</h1>
            <Middle />
          </div>
          <div style={{ width: '100%' }}>
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>123호 1234</h1>
            <Right />
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
