import React, { useState, useEffect } from 'react';
import { Cascader, Button } from 'antd';

// Define types for your data
interface BusData {
  number: number;
  productionHistory: string;
  busName: string;
  busID: string;
  chargingStatus: string;
  collectionDate: string;
  usage: string;
  eventCode: string;
  eventCode1: string;
  eventCode2: string;
  eventCode3: string;
  eventCode4: string;
  eventCode5: string;
}

const Top: React.FC<{ data: BusData[] }> = ({ data }) => {
  // 각 Cascader에 대한 옵션
  const firstCascaderOptions = [
    { value: '전체보기', label: '전체보기' },
    { value: '5개', label: '5개' },
    { value: '10개', label: '10개' },
    { value: '20개', label: '20개' },
  ];

  // Cascader 옵션 상태 및 업데이트 함수 정의
  const [secondCascaderOptions, setSecondCascaderOptions] = useState<{ value: string; label: string }[]>([]);
  const [thirdCascaderOptions, setThirdCascaderOptions] = useState<{ value: string; label: string }[]>([]);
  const [fourthCascaderOptions, setFourthCascaderOptions] = useState<{ value: string; label: string }[]>([]);
  const [fifthCascaderOptions, setFifthCascaderOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    // 데이터가 변경될 때 Cascader 옵션을 업데이트
    setSecondCascaderOptions(
      Array.from(new Set(data.map((item) => item.busID))).map((busID) => ({ value: busID, label: busID })),
    );
    setThirdCascaderOptions(
      Array.from(new Set(data.map((item) => item.busName))).map((busName) => ({ value: busName, label: busName })),
    );
    setFourthCascaderOptions(
      Array.from(new Set(data.map((item) => item.eventCode))).map((eventCode) => ({
        value: eventCode,
        label: eventCode,
      })),
    );
    setFifthCascaderOptions(
      Array.from(new Set(data.map((item) => item.eventCode5))).map((eventCode5) => ({
        value: eventCode5,
        label: eventCode5,
      })),
    );
  }, [data]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '35px',
          background: 'white',
          marginTop: '20px',
        }}
      >
        <Cascader options={firstCascaderOptions} placeholder="항목 갯수" />

        <Cascader options={secondCascaderOptions} placeholder="차량번호" />

        <Cascader options={thirdCascaderOptions} placeholder="운행사" />

        <Cascader options={fourthCascaderOptions} placeholder="이벤트 발생" />

        <Cascader options={fifthCascaderOptions} placeholder="제조사" />

        <Button style={{ background: '#2B85FF', color: 'white' }}>검색</Button>
        <Button style={{ background: '#2B85FF', color: 'white' }}>전체목록</Button>
        <Button style={{ background: '#FF3232', color: 'white' }}>신규 버스 등록</Button>

        <Button style={{ background: '#0ACF83', color: 'white' }}>엑셀다운로드</Button>
      </div>
      {/* 모달 */}
    </>
  );
};

export default Top;
