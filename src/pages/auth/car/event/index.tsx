import MainLayout from '../../../../layouts/index';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import EventTable from '../../../../components/table/eventtable';
import EventModal from '../../../../components/modal/event';
import styled from '@emotion/styled';
import Head from 'next/head';
import { loadMyInfoAPI } from '../../../../components/apis/event/event';
interface Row {
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
`;

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [maintenanceHistory, setMaintenanceHistory] = useState<Row[]>([]);

  const fetchMyInfo = async () => {
    try {
      const myInfoData = await loadMyInfoAPI();
      // 정비 이력 데이터
      const maintenanceHistoryData = myInfoData.map((info: { day: any; detail: any; status: any }) => ({
        day: info.day,
        detail: info.detail,
        status: info.status || '',
      }));
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
        <title>Bus 관리 페이지</title>
        <meta name="description" content="Bus" />
      </Head>
      <div style={{ width: '1370px', margin: '0 auto', display: 'flex', justifyContent: 'flex-start' }}>
        <h1>자동차 정비 및 부품교체 이력</h1>
      </div>
      <Page>
        <div style={{ width: '30%', height: '100%' }}>
          <h3>정비 이력</h3>
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
              <Button style={{ marginRight: '5px' }} onClick={showModal}>
                정비이력입력
              </Button>
              <Button style={{ marginRight: '5px' }}>수정</Button>
              <Button>삭제</Button>
              <EventModal open={modalOpen} onCancel={handleCancel} />
            </div>
          </div>
        </div>
        <div style={{ width: '65%', height: '100%' }}>
          <h3>부품 교체 이력</h3>
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
              {/* <EventTable data={maintenanceHistory} /> */}
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button>부품 교체 이력 다운로드</Button>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};
MyPage.layout = MainLayout;

export default MyPage;
