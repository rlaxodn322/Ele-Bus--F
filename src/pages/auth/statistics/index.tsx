import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layouts';
import Range from '../../../components/antd/range';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { loadBusListAPI } from '../../../components/apis/bus/bus';

const Page = styled.section`
  width: 1370px;
  height: 750px;
  margin: 30px auto;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px lightgray;
  @media (max-width: 1100px) {
    margin-top: 60px;
    width: 100%;
    height: 100%;
    background-color: white;
    box-shadow: none;
  }
`;
const ErrorWapper = styled.div`
  border: 1px solid lightgray;
  margin: 0 auto;
  width: 100%;
  height: 65%;
  border-radius: 10px;
  overflow-y: auto;
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
`;
interface ErrorLogProps {
  date: string;
  busNumber: string;
  errorLocation: string;
  errorMessage: string;
  remark: string;
}

const ErrorLog: React.FC<ErrorLogProps> = ({ date, busNumber, errorLocation, errorMessage, remark }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', overflowY: 'auto' }}>
    <h1 style={{ width: '15%', height: '30px', margin: '5px' }}>{date}</h1>
    <h1 style={{ width: '20%', height: '30px', margin: '5px' }}>{busNumber}</h1>
    <h1 style={{ width: '25%', height: '30px', margin: '5px' }}>{errorLocation}</h1>
    <h1 style={{ width: '19%', height: '30px', margin: '5px' }}>{errorMessage}</h1>
    <h1 style={{ width: '15%', height: '30px', margin: '5px' }}>{remark}</h1>
  </div>
);

const MyPage = () => {
  const [buses, setBuses] = useState<{ id: string; carNumber: string }[]>([]);
  const [errorLogs, setErrorLogs] = useState<ErrorLogProps[]>([]);
  const [selectedBusNumber, setSelectedBusNumber] = useState<string | null>(null);

  const fetchBusList = async () => {
    try {
      const busListData = await loadBusListAPI();
      setBuses(busListData);
      const errorLogsData = busListData.map((bus: any) => ({
        date: bus.day,
        busNumber: bus.carNumber,
        errorLocation: 'MCU통신고장경보',
        errorMessage: '에러',
        remark: '미조치',
      }));
      setErrorLogs(errorLogsData);
    } catch (error) {
      console.error('버스 목록 불러오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchBusList();
  }, []);

  // 날짜를 기준으로 오름차순으로 정렬하는 함수
  const sortByDateAscending = (logs: ErrorLogProps[]) => {
    return logs.sort((a, b) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);
      return dateB - dateA;
    });
  };

  return (
    <>
      <Page>
        <h1>통계정보</h1>
        <div style={{ width: '100%', height: '27%' }}>
          <Range buses={buses} onSelectCarNumber={setSelectedBusNumber} />
        </div>
        <div style={{ marginBottom: '10px', width: '89.7%', display: 'flex', justifyContent: 'end' }}>
          <Button type="primary">엑셀다운로드</Button>
        </div>

        <ErrorWapper
          style={{
            border: '1px solid lightgray',
            margin: '0 auto',
            width: '98%',
            height: '60%',
            borderRadius: '10px',
            overflow: 'auto',
          }}
        >
          <div style={{ borderBottom: '1px solid lightgray', height: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10px' }}>
              <h1 style={{ width: '15%' }}>날짜</h1>
              <h1 style={{ width: '20%' }}>차량</h1>
              <h1 style={{ width: '20%' }}>에러위치</h1>
              <h1 style={{ width: '20%' }}>에러내용</h1>
              <h1 style={{ width: '15%' }}>비고</h1>
            </div>
          </div>
          {/* 선택된 차량 번호에 따라 필터링 및 정렬하여 매핑 */}
          {(selectedBusNumber
            ? sortByDateAscending(errorLogs.filter((log) => log.busNumber === selectedBusNumber))
            : sortByDateAscending(errorLogs)
          ).map((log, index) => (
            <ErrorLog key={index} {...log} />
          ))}
        </ErrorWapper>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
