import React, { useEffect, useState } from 'react';
import MainLayout from '../../../layouts';
import Range from '../../../components/antd/range';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { loadBusListAPI } from '../../../components/apis/bus/bus';
import * as XLSX from 'xlsx';

const Page = styled.section`
  width: 1370px;
  height: 750px;
  margin: 30px auto;

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
  width: 90%;
  height: 60%;
  border-radius: 10px;

  @media (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
`;
const ErrorTable = styled.div`
  height: 90%;
  overflow-y: auto;
  @media (max-width: 1100px) {
    font-size: 9px;
  }
`;
const ErrorPageWapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding-top: 15px;
`;
const ButtonWapper = styled.div`
  margin-bottom: 10px;
  width: 89.7%;
  display: flex;
  justify-content: end;
  @media (max-width: 1100px) {
    display: none;
  }
`;
interface ErrorLogProps {
  date: string;
  busNumber: string;
  errorLocation: string;
  errorMessage: string;
  remark: string;
}
interface Bus {
  id: number;
  companyNumber: string;
  day: string;
  carNumber: string;
  carinfo: string;
}
const ErrorLog: React.FC<ErrorLogProps> = ({ date, busNumber, errorLocation, errorMessage, remark }) => {
  // 랜덤 온도 값을 생성합니다.
  const temperature = Math.floor(Math.random() * 21) + 5; // 20부터 40까지의 랜덤한 온도 생성
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
      <h1 style={{ width: '15%', height: '30px', margin: '5px', textAlign: 'center' }}>{date}</h1>
      <h1 style={{ width: '20%', height: '30px', margin: '5px', textAlign: 'center' }}>{busNumber}</h1>
      <h1 style={{ width: '25%', height: '30px', margin: '5px', textAlign: 'center' }}>{errorLocation}</h1>
      <h1 style={{ width: '19%', height: '30px', margin: '5px', textAlign: 'center' }}>{errorMessage}</h1>
      <h1 style={{ width: '15%', height: '30px', margin: '5px', textAlign: 'center' }}>{temperature}˚</h1>{' '}
      {/* 온도 값을 표시합니다. */}
      <h1 style={{ width: '15%', height: '30px', margin: '5px', textAlign: 'center' }}>{remark}</h1>
    </div>
  );
};
const MyPage = () => {
  const [buses, setBuses] = useState<Bus[]>([]);
  const [errorLogs, setErrorLogs] = useState<ErrorLogProps[]>([]);
  const [selectedBusNumber, setSelectedBusNumber] = useState<string | null>(null);
  const downloadExcel = () => {
    // 엑셀 파일로 변환할 데이터 가져오기
    const data = errorLogs.map(({ date, busNumber, errorLocation, errorMessage, remark }) => ({
      날짜: date,
      차량: busNumber,
      에러위치: errorLocation,
      에러내용: errorMessage,
      비고: remark,
    }));

    // 데이터 배열을 워크북에 추가
    const ws = XLSX.utils.json_to_sheet(data);

    // 새 워크북 생성
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ErrorLogs');

    // 엑셀 파일 저장
    XLSX.writeFile(wb, 'error_logs.xlsx');
  };
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        <ErrorPageWapper>
          <div style={{ width: '100%', height: '27%' }}>
            <Range buses={buses} onSelectCarNumber={setSelectedBusNumber} />
          </div>
          <ButtonWapper>
            <Button onClick={downloadExcel} style={{ background: '#27B964', color: 'white' }}>
              엑셀다운로드
            </Button>
          </ButtonWapper>
          <ErrorWapper>
            <div
              style={{
                borderBottom: '1px solid lightgray',
                height: '10%',
                background: '#2CA0F3',
                color: 'white',
                borderRadius: '10px',
                position: 'sticky',
                top: '0',
                zIndex: '2',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10px' }}>
                <h1 style={{ width: '15%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>날짜</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>차량</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>에러위치</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>에러내용</h1>
                <h1 style={{ width: '15%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>온도</h1>
                <h1 style={{ width: '15%', margin: '0 auto', marginTop: '5px', textAlign: 'center' }}>비고</h1>
              </div>
            </div>
            <ErrorTable>
              {/* 선택된 차량 번호에 따라 필터링 및 정렬하여 매핑 */}
              {(selectedBusNumber
                ? sortByDateAscending(errorLogs.filter((log) => log.busNumber === selectedBusNumber))
                : sortByDateAscending(errorLogs)
              ).map((log, index) => (
                <ErrorLog key={index} {...log} />
              ))}
            </ErrorTable>
          </ErrorWapper>
        </ErrorPageWapper>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
