import React from 'react';
import MainLayout from '../../../layouts';
import Link from 'next/link';
import { Button } from 'antd';
import { Page } from './style';
import Left from '../../../components/error/left';
import Card from '../../../components/card/dtgcard';
import Middle from '../../../components/error/middle';
import BusCard from '../../../components/bus/buscard';
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
  return (
    <>
      <Page>
        <BusCard />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '80%',
            marginTop: '20px',
          }}
        >
          <div
            style={{ width: '100%', marginRight: '20px', borderRadius: '10px', boxShadow: '1px 1px 2px 2px lightgray' }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>수원여객차량</h1>
            <Left />
          </div>
          <div
            style={{ width: '100%', marginRight: '20px', borderRadius: '10px', boxShadow: '1px 1px 2px 2px lightgray' }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>123호 1234</h1>
            <Middle />
          </div>
          <div
            style={{
              width: '100%',
              borderRadius: '10px',
              boxShadow: '1px 1px 2px 2px lightgray',
            }}
          >
            <h1 style={{ marginLeft: '10px', color: '#2B85FF' }}>123호 1234</h1>
            <Card data={dummyData}></Card>
            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}>
              <Link href="./dtg">
                <Button style={{ marginRight: '10px' }}>제출하기</Button>
              </Link>

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
