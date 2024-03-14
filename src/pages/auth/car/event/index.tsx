import MainLayout from '../../../../layouts/index';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import EventTable from '../../../../components/table/eventtable';
import EventModal from '../../../../components/modal/event';
import styled from '@emotion/styled';
import Head from 'next/head';
import { loadMyInfoAPI } from '../../../../components/apis/event/event';
import Table7 from '../../../../components/table/event7';
import { useRouter } from 'next/router';
import React from 'react';
interface Row {
  companynumber: string;
  busnum: string;
  day: string;
  detail: string;
  status: string;
}

const Page = styled.section`
  width: 1370px;
  height: 730px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
    flex-direction: column;
  }
`;
const ItemTable = styled.div`
  width: 69%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 9px;
  }
`;
const EventAS = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const busDataColumns = ['이벤트경보', '부품명', '교체주기', '마지막점검', '교체예정', '비고', '수정'];

const dummyTableData = [
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },
  {
    user: '-',
    registrationDate: '배터리',
    status: '5년',
    status1: '2024-01-01',
    status2: '2027-01-01',
    status3: '',
    status4: '수정',
  },

  // Add more dummy data as needed
];
const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [maintenanceHistory, setMaintenanceHistory] = useState<Row[]>([]);
  const router = useRouter();

  // 세션 스토리지에서 로그인 데이터를 가져옵니다.
  const isAuthenticated = typeof window !== 'undefined' && Boolean(sessionStorage.getItem('userData'));

  // 로그인되어 있지 않으면 로그인 페이지로 리디렉션합니다.
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);
  const fetchMyInfo = async () => {
    try {
      const myInfoData = await loadMyInfoAPI();
      // 정비 이력 데이터
      const maintenanceHistoryData = myInfoData.map(
        (info: { companynumber: any; day: any; detail: any; status: any; busnum: any }) => ({
          companynumber: info.companynumber,
          busnum: info.busnum,
          day: info.day,
          detail: info.detail,
          status: info.status || '',
        }),
      );
      setMaintenanceHistory(maintenanceHistoryData);
      // 상태 업데이트 이후에 상태를 직접 사용
    } catch (error) {
      console.error('데이터 불러오기 오류:', error);
      // 오류를 적절하게 처리
    }
  };
  useEffect(() => {
    fetchMyInfo();
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    fetchMyInfo();
  };

  return (
    <>
      <Head>
        <title>자동차 정비 이력페이지</title>
        <meta name="description" content="Bus" />
      </Head>
      <div style={{ width: '1370px', margin: '0 auto', display: 'flex', justifyContent: 'flex-start' }}></div>
      <Page>
        <h1></h1>

        <EventAS>
          <h3>자동차 정비 이력</h3>
          <div style={{ width: '100%', height: '90%' }}>
            <div
              style={{
                width: '100%',
                height: '90%',
                background: 'white',
                boxShadow: '1px 1px 2px 2px lightgray',
                borderRadius: '10px',
              }}
            >
              <EventTable data={maintenanceHistory} />
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button type="primary" style={{ marginRight: '5px' }} onClick={showModal}>
                정비이력입력
              </Button>

              <EventModal open={modalOpen} onCancel={handleCancel} />
            </div>
          </div>
        </EventAS>

        <ItemTable>
          <Title>
            <h3>부품 교체 이력</h3>
          </Title>

          <div style={{ width: '100%', height: '90%' }}>
            <div
              style={{
                width: '100%',
                height: '90%',
                background: 'white',
                boxShadow: '1px 1px 2px 2px lightgray',
                borderRadius: '10px',
              }}
            >
              <Table7 data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ color: 'white', background: '#27B964' }}>부품 교체 이력 다운로드</Button>
            </div>
          </div>
        </ItemTable>
      </Page>
    </>
  );
};
MyPage.layout = MainLayout;

export default MyPage;
