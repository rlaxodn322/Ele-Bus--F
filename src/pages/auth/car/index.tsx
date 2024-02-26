import React, { useState, useEffect } from 'react';
import MainLayout from '../../../layouts';
import Link from 'next/link';
import { Button } from 'antd';
// import { Page } from './style';
import Left from '../../../components/car/left';
import Card from '../../../components/card/dtgcard';
import Middle from '../../../components/car/middle';
import BusCard from '../../../components/bus/buscard';
import styled from '@emotion/styled';
import Head from 'next/head';
import Bus from '../../../components/bus/busstation';

import axios from 'axios';
interface BusLocation {
  stationId: string;
  remainSeatCnt: string;
  stationName: string;
  // 다른 속성들도 필요하다면 추가
}

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100%;
  margin: 30px auto;
`;

// 더미 데이터
const dummyData = [
  { id: 1, vehicle: '차량1', status: '운행기록장치 모델명', battery: 'GTG 기록 ABCD' },
  { id: 2, vehicle: '차량2', status: '차대번호', battery: '123456789123-22' },
  { id: 3, vehicle: '차량3', status: '자동차 유형', battery: '전기버스' },
  { id: 4, vehicle: '차량1', status: '자동차 등록번호', battery: '경기11가 1234' },
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

  // 필요한 만큼 데이터를 추가할 수 있습니다.
];
const MyPage = () => {
  const [stations, setStations] = useState<BusLocation[]>([]);
  const [busLocations, setBusLocations] = useState<BusLocation[]>([]);
  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stations');
        setStations(response.data.stations);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBusLocations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bus');
        setBusLocations(response.data.stations);
      } catch (error) {
        console.error(error);
      }
    };

    // 초기 호출
    fetchStations();
    fetchBusLocations();

    // 1분마다 호출
    const intervalId = setInterval(() => {
      fetchStations();
      fetchBusLocations();
    }, 60000);

    // 컴포넌트가 언마운트되면 clearInterval을 호출하여 인터벌 제거
    return () => clearInterval(intervalId);
  }, []);
  const [dtgRecordTitle] = useState<string>('DTG정보');

  return (
    <>
      <Head>
        <title>차량조회/관리 페이지</title>
        <meta name="description" content="차량조회" />
      </Head>
      <Page>
        <h1>차량조회/관리</h1>
        <BusCard busCount={busLocations.length} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '65%',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              height: '600px',
              width: '100%',
              marginRight: '20px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              background: 'white',
            }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>수원여객차량</h1>
            <Left />
          </div>
          <div
            style={{
              width: '100%',
              height: '600px',
              marginRight: '20px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              overflowY: 'auto',
              background: 'white',
            }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>4403 </h1>

            <Middle />
          </div>
          <div
            style={{
              width: '100%',
              height: '600px',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              marginRight: '20px',
              background: 'white',
            }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>123호 1234</h1>
            <Card dtgRecordTitle={dtgRecordTitle} data={dummyData}></Card>
            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px', marginTop: '100px' }}>
              <Link href="./dtg">
                <Button style={{ marginRight: '10px' }}>제출하기</Button>
              </Link>

              <Button>다운로드</Button>
            </div>
          </div>
          <div
            style={{
              width: '90%',
              height: '600px',

              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
              overflowY: 'auto',
            }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>4403 노선</h1>
            <div
              style={{
                width: '100%',
                height: '8%',
                background: '#2CA0F3',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <h1 style={{ margin: '0 auto' }}>노선</h1>
            </div>
            <Bus stations={stations} busLocations={busLocations} />
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;