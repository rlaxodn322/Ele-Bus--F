import MainLayout from '../../../../layouts/index';
import { Button } from 'antd';
import EventTable from '../../../../components/table/eventtable';
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
const dummyTableData1 = [
  {
    registrationDate: '2023-1108/08:30',
    user: '배터리 점검 및 교체',
    status: '배터리 용량이 감소하여 교체',
  },
  {
    registrationDate: '2023-1108/08:31',
    user: '충전 시스템 점검',
    status: '',
  },
];
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
            }}
          >
            <div
              style={{
                width: '100%',
                height: '90%',
                background: 'white',
                boxShadow: '1px 1px 2px 2px lightgray',
                borderRadius: '10px',
              }}
            >
              <EventTable data={dummyTableData1} />
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ marginRight: '5px' }}>정비이력입력</Button>
              <Button style={{ marginRight: '5px' }}>수정</Button>
              <Button>삭제</Button>
            </div>
          </div>
        </div>
        <div style={{ width: '65%', height: '100%' }}>
          <h3>부품교체 이력</h3>
          <div
            style={{
              width: '100%',
              height: '90%',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '90%',
                background: 'white',
                boxShadow: '1px 1px 2px 2px lightgray',
                borderRadius: '10px',
              }}
            ></div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button>다운로드</Button>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
