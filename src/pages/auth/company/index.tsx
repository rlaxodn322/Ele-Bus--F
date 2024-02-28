import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Table7 from '../../../components/table/table7';
import Table5 from '../../../components/table/table5';
import { Button } from 'antd'; // Modal과 Form을 추가로 import
import { useState, useEffect } from 'react';
import { loadMyInfoAPI } from '@/components/apis/company/company';

import BusCreate from '../../../components/modal/buscreate';
// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100%;
  margin: 30px auto;
`;
interface Row {
  companynumber: string;
  company: string;
  companylocation: string;
  companyname: string;
  day: string;
}
const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // visible 상태 대
  const [maintenanceHistory, setMaintenanceHistory] = useState<Row[]>([]);
  const fetchMyInfo = async () => {
    try {
      const myInfoData = await loadMyInfoAPI();
      const maintenanceHistoryData = myInfoData.map(
        (info: { companynumber: any; company: any; companylocation: any; companyname: any; day: any }) => ({
          companynumber: info.companynumber,
          company: info.company,
          companylocation: info.companylocation,
          companyname: info.companyname,
          day: info.day,
        }),
      );
      setMaintenanceHistory(maintenanceHistoryData);
    } catch (error) {
      console.error('데이터 불러오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  // Modal 열기 함수
  const showModal = () => {
    setModalOpen(true);
  };

  // Modal 닫기 함수
  const handleCancel = () => {
    setModalOpen(false);
    // 데이터 다시 불러오기
    fetchMyInfo();
  };

  const busDataColumns = ['버스ID', '등록일', '차량번호', '차량등록', '차대번호', '통신모듈', '모델번호'];
  const busDataColumns1 = ['충전ID', '등록일', '충전용량', '누적충전', '모델'];

  const dummyTableData = [
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },

    // Add more dummy data as needed
  ];
  const dummyTableData1 = [
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:31',
      status: '60kw',
      status1: '600kw',
      status2: '급속A123',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:32',
      status: '60kw',
      status1: '600kw',
      status2: '급속A123',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    // Add more dummy data as needed
  ];
  return (
    <>
      <Head>
        <title>사업자조회/관리 페이지</title>
        <meta name="description" content="company" />
      </Head>
      <Page>
        <h1>사업자조회/관리</h1>
        <Top data={maintenanceHistory} onReloadData={fetchMyInfo} />
        <div
          style={{
            width: '100%',
            height: '30%',
            marginTop: '10px',
            padding: '10px',

            borderRadius: '10px',
            boxShadow: '1px 1px 2px 2px lightgray',
            background: 'white',
          }}
        >
          <div style={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '90%', marginRight: '20px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>버스 등록 현황</h1>
                <div>
                  <Button style={{ marginRight: '5px' }} onClick={showModal}>
                    버스 등록
                  </Button>
                  <Button style={{ marginRight: '5px' }}>엑셀다운로드</Button>
                </div>
              </div>
              <BusCreate open={modalOpen} onCancel={handleCancel} />
              <Table7 a="전체 통신모듈" data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ width: '90%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>충전기 등록 현황</h1>
                <Button>엑셀다운로드</Button>
              </div>

              <Table5 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
