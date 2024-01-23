import React from 'react';
import MainLayout from '../../../layouts';
import { Page } from './style';
import Range from '../../../components/antd/range';
import { Button } from 'antd';
interface ErrorLogProps {
  date: string;
  vehicle: string;
  errorLocation: string;
  errorMessage: string;
  remark: string;
}
const ErrorLog: React.FC<ErrorLogProps> = ({ date, vehicle, errorLocation, errorMessage, remark }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
    <h1 style={{ width: '15%', height: '30px', margin: '5px' }}>{date}</h1>
    <h1 style={{ width: '20%', height: '30px', margin: '5px' }}>{vehicle}</h1>
    <h1 style={{ width: '25%', height: '30px', margin: '5px' }}>{errorLocation}</h1>
    <h1 style={{ width: '19%', height: '30px', margin: '5px' }}>{errorMessage}</h1>
    <h1 style={{ width: '15%', height: '30px', margin: '5px' }}>{remark}</h1>
  </div>
);

const MyPage = () => {
  const errorLogs = [
    {
      date: '20240117',
      vehicle: '123호1234',
      errorLocation: 'MCU통신고장경보',
      errorMessage: '에러',
      remark: '미조치',
    },
    {
      date: '20240117',
      vehicle: '321호1234',
      errorLocation: '배터리팩 열관리상태',
      errorMessage: '에러',
      remark: '미조치',
    },
    {
      date: '20240117',
      vehicle: '321호1234',
      errorLocation: '배터리팩 열관리상태',
      errorMessage: '에러',
      remark: '미조치',
    },
    { date: '20240117', vehicle: '123호1234', errorLocation: '모터온도', errorMessage: '에러', remark: '미조치' },
  ];

  return (
    <>
      <Page>
        <div style={{ width: '100%', height: '27%' }}>
          <h1 style={{ marginLeft: '100px' }}>통계정보</h1>
          <h1>
            <Range />
          </h1>
        </div>
        <div style={{ marginBottom: '10px', width: '89.7%', display: 'flex', justifyContent: 'end' }}>
          <Button type="primary">엑셀다운로드</Button>
        </div>

        <div
          style={{
            border: '1px solid lightgray',
            margin: '0 auto',
            width: '80%',
            height: '65%',
            borderRadius: '10px',
            overflow: 'auto', // Add this to enable scrolling if the content overflows
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
          {errorLogs.map((log, index) => (
            <ErrorLog key={index} {...log} />
          ))}
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
