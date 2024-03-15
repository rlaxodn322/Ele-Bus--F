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
  width: 100%;
  height: 65%;
  border-radius: 10px;
  overflow-y: auto;
  @media (max-width: 1100px) {
    font-size: 10px;
    width: 100%;
  }
`;
const ErrorTable = styled.div`
  height: 400px;
  @media (max-width: 1100px) {
    font-size: 9px;
  }
`;
const ErrorPageWapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px lightgray;
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
                <h1 style={{ width: '15%', margin: '0 auto', marginTop: '5px' }}>날짜</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px' }}>차량</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px' }}>에러위치</h1>
                <h1 style={{ width: '20%', margin: '0 auto', marginTop: '5px' }}>에러내용</h1>
                <h1 style={{ width: '15%', margin: '0 auto', marginTop: '5px' }}>비고</h1>
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
