import MainLayout from '../../../../layouts/index';

// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';
const Page = styled.section`
  width: 1370px;
  height: 730px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

const MyPage = () => {
  return (
    <>
      <Head>
        <title>Bus 관리 페이지</title>
        <meta name="description" content="Bus" />
      </Head>
      <h1 style={{ marginLeft: '230px' }}>자동차 정비 및 부품교체 이력</h1>
      <Page>
        <div style={{ width: '30%', height: '100%' }}>
          <h3>정비이력</h3>
          <div
            style={{
              width: '100%',
              height: '90%',
              background: 'white',
              border: '1px solid lightgray',
              borderRadius: '10px',
            }}
          ></div>
        </div>
        <div style={{ width: '65%', height: '100%' }}>
          <h3>부품교체 이력</h3>
          <div
            style={{
              width: '100%',
              height: '90%',
              background: 'white',
              border: '1px solid lightgray',
              borderRadius: '10px',
            }}
          ></div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
