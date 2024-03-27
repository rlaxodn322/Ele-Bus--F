import Mqtt from '@/components/apis/mqtt/mqtt';
import MainLayout from '../../../layouts/index';
// import { Page } from './style';

import styled from '@emotion/styled';
import Head from 'next/head';
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const MyPage = () => {
  return (
    <>
      <Head>
        <title>그래프 관리 페이지</title>
        <meta name="description" content="Service" />
      </Head>
      <Page>
        <Mqtt></Mqtt>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
