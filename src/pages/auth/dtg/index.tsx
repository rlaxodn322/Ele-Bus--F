import React, { useState } from 'react';
import MainLayout from '../../../layouts/index';
import Card from '../../../components/card/dtgcard';
import Table3 from '../../../components/table/table3company';
import { Button } from 'antd';
// import { Page } from './style';
import DtgTable from '../../../components/table/dtgtable';
import Date from '../../../components/antd/date';
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

const busDataColumns = ['운행일시', '운행시간', '누적거리', '운행속도', '운행거리', '평균속도'];
const dummyTableData = [
  {
    user: '2024-02-01',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-05',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-09',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-09',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-10',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-15',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-20',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-16',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-14',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-18',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-23',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-28',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-11',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },
  {
    user: '2024-02-08',
    registrationDate: '1시 01분 30초',
    status: '10시~11시',
    status1: '18,000km',
    status2: '60km',
    status3: '60km',
  },

  // Add more dummy data as needed
];
const busDataColumns2 = ['등록일자', '사용자', '상태'];
const dummyTableData2 = [
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1235',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1236',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1237',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1238',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
];

// 더미 데이터
const dummyData = [
  { id: 1, vehicle: '차량1', status: '운행기록장치 모델명', battery: 'GTG 기록 ABCD' },
  { id: 2, vehicle: '차량2', status: '차대번호', battery: '123456789123-22' },
  { id: 3, vehicle: '차량3', status: '자동차 유형', battery: '전기버스' },
  { id: 4, vehicle: '차량1', status: '자동차 등록번호', battery: '경기11가1234' },
  { id: 5, vehicle: '차량2', status: '운송사업자 등록번호', battery: '123-12325-22' },
  { id: 6, vehicle: '차량3', status: '운전자 코드', battery: '123-123456-12' },
  { id: 7, vehicle: '차량1', status: '주행거리(일일/누적)', battery: '' },
  { id: 8, vehicle: '차량2', status: '정보발생일시', battery: '' },
  { id: 9, vehicle: '차량3', status: '차량속도(km/hr)', battery: '' },
  { id: 10, vehicle: '차량1', status: 'RPM', battery: '' },
  { id: 11, vehicle: '차량2', status: '브레이크 신호', battery: '' },
  { id: 12, vehicle: '차량3', status: '가속도', battery: '' },
  { id: 13, vehicle: '차량1', status: '차량위치(GPS X,Y좌표)', battery: '' },
  { id: 14, vehicle: '차량2', status: '위성항법(GPS 방위각)', battery: '' },
  { id: 15, vehicle: '차량2', status: '마지막 제출일', battery: '' },

  // 필요한 만큼 데이터를 추가할 수 있습니다.
];

const MyPage = () => {
  const [dtgRecordTitle, setDtgRecordTitle] = useState<string>('차량넘버');
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const updateDtgRecordTitle = (vehicleNumber: string) => {
    setDtgRecordTitle(` ${vehicleNumber}`);
  };

  const handleDateChange = (start: string | null, end: string | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  // dummyTableData를 필터링하여 startDate와 endDate 사이의 데이터를 추출
  const filteredData = dummyTableData.filter((item) => {
    if (!startDate || !endDate) return true;
    return item.user >= startDate && item.user <= endDate;
  });
  return (
    <>
      <Head>
        <title>DTG 관리 페이지</title>
        <meta name="description" content="DTG" />
      </Head>
      <Page>
        <h1>DTG 관리</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              width: '30%',
              height: '700px',
              marginRight: '20px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              background: 'white',
            }}
          >
            <h1 style={{ marginLeft: '10px' }}>차량 목록</h1>
            <Table3 data={dummyTableData2} columns={busDataColumns2} updateDtgRecordTitle={updateDtgRecordTitle} />
          </div>
          <div
            style={{
              width: '30%',

              marginRight: '20px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              background: 'white',
            }}
          >
            <h1 style={{ marginLeft: '10px' }}>DTG 실시간 기록</h1>
            <Card dtgRecordTitle={dtgRecordTitle} data={dummyData}></Card>
            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px', marginTop: '120px' }}>
              <Button>다운로드</Button>
            </div>
          </div>
          <div
            style={{
              height: '700px',
              width: '50%',
              marginRight: '20px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              background: 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ marginLeft: '10px' }}>DTG 과거 이력</h1>
              <div style={{ marginTop: '15px' }}>
                {/* Date 컴포넌트에 선택한 날짜 범위를 전달하고, 선택 시 handleDateChange 함수 호출 */}
                <Date onDateChange={handleDateChange} />
              </div>
            </div>
            {/* 필터링된 데이터를 DtgTable 컴포넌트로 전달 */}
            <DtgTable data={filteredData} columns={busDataColumns} />
            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
              <Button style={{ marginRight: '10px' }}>다운로드</Button>
              <Button>DTG정보제출하기</Button>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
