import MainLayout from '../../../layouts/index';
// import Top from '../../../components/bus/top';
import TopMiddle from '../../../components/bus/topmiddle';
import Middle from '../../../components/bus/middle';
// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 30px auto;
`;

const MyPage = () => {
  const data = [
    {
      number: 1,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 2,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 3,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 4,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 7,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 5,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AAA모터스',
    },
    {
      number: 6,
      productionHistory: 'busID',
      busName: '동탄여객',
      busID: '운행중',
      chargingStatus: 'on',
      collectionDate: 'on',
      usage: '20,000km',
      eventCode: '2건',
      eventCode1: '조회',
      eventCode2: '2023-01-01',
      eventCode3: '2023-01-01',
      eventCode4: 'A123-1235',
      eventCode5: 'AA모터스',
    },

    // Add more data as needed
  ];
  return (
    <>
      <Head>
        <title>Bus 관리 페이지</title>
        <meta name="description" content="Bus" />
      </Head>
      <Page>
        {/* <Top /> */}
        <TopMiddle data={data} />
        <Middle data={data} />
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
