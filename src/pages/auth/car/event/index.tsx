import MainLayout from '../../../../layouts/index';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import EventTable from '../../../../components/table/eventtable';
import EventModal from '../../../../components/modal/event';
import styled from '@emotion/styled';
import Head from 'next/head';
import { loadMyInfoAPI } from '../../../../components/apis/event/event';

const Page = styled.section`
  width: 1370px;
  height: 730px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [maintenanceHistory, setMaintenanceHistory] = useState<Row[]>([]);
  const [partReplacementHistory, setPartReplacementHistory] = useState<Row[]>([]);
  const [processedData, setProcessedData] = useState<ProcessedRow[]>([]);

  useEffect(() => {
    const fetchMyInfo = async () => {
      try {
        const myInfoData = await loadMyInfoAPI();
        console.log('myInfoData', myInfoData);

        // 정비 이력 데이터
        const maintenanceHistoryData = myInfoData
          .filter((info: { type: string }) => info.type === 'maintenance')
          .map((info: { dataValues: EventDataValues }) => ({
            day: info.dataValues.day,
            detail: info.dataValues.detail,
            status: info.dataValues.status || '',
          }));

        // 부품 교체 이력 데이터
        const partReplacementHistoryData = myInfoData
          .filter((info: { type: string }) => info.type === 'partReplacement')
          .map((info: { dataValues: EventDataValues }) => ({
            day: info.dataValues.day,
            detail: info.dataValues.detail,
            status: info.dataValues.status || '',
          }));

        setMaintenanceHistory(maintenanceHistoryData);
        setPartReplacementHistory(partReplacementHistoryData);

        console.log('maintenanceHistory', maintenanceHistory);
        console.log('partReplacementHistory', partReplacementHistory);
      } catch (error) {
        console.error('데이터 불러오기 오류:', error);
        // Handle the error appropriately
      }
    };

    fetchMyInfo();
  }, [setMaintenanceHistory, setPartReplacementHistory]);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Bus 관리 페이지</title>
        <meta name="description" content="Bus" />
      </Head>
      <h1 style={{ marginLeft: '230px' }}>자동차 정비 및 부품교체 이력</h1>
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
              <EventTable data={processedData} />
            </div>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button style={{ marginRight: '5px' }} onClick={showModal}>
                정비 이력 입력
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
              {/* <EventTable
                data={partReplacementHistory.map((info) => ({
                  registrationDate: info.dataValues.createdAt,
                  user: info.dataValues.detail,
                  status: info.dataValues.status || '',
                }))}
              /> */}
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
