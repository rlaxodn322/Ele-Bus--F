import React, { useState, useEffect } from 'react';
import { Cascader, Button } from 'antd';
import NewBusModal from '../modal/busmodal';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 각 Cascader에 대한 상태
  const [firstFilter, setFirstFilter] = useState<string | null>(null); // 첫 번째 Cascader의 필터
  const [secondFilter, setSecondFilter] = useState<string | null>(null); // 두 번째 Cascader의 필터
  const [thirdFilter, setThirdFilter] = useState<string | null>(null); // 세 번째 Cascader의 필터
  const [fourthFilter, setFourthFilter] = useState<string | null>(null); // 네 번째 Cascader의 필터
  const [fifthFilter, setFifthFilter] = useState<string | null>(null); // 다섯 번째 Cascader의 필터

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

  // 각 Cascader에 대한 필터링 로직
  const handleFirstFilterChange = (value: string) => {
    setFirstFilter(value);
    // 첫 번째 Cascader의 필터링 로직 추가
  };

  const handleSecondFilterChange = (value: string) => {
    setSecondFilter(value);
    // 두 번째 Cascader의 필터링 로직 추가
  };

  const handleThirdFilterChange = (value: string) => {
    setThirdFilter(value);
    // 세 번째 Cascader의 필터링 로직 추가
  };

  const handleFourthFilterChange = (value: string) => {
    setFourthFilter(value);
    // 네 번째 Cascader의 필터링 로직 추가
  };

  const handleFifthFilterChange = (value: string) => {
    setFifthFilter(value);
    // 다섯 번째 Cascader의 필터링 로직 추가
  };

  const handleNewBusRegistration = (values: any) => {
    // 새로운 버스 등록 로직을 수행합니다.
    console.log('새로운 버스 등록:', values);
    setIsModalVisible(false);
  };

  useEffect(() => {
    // 데이터가 변경될 때 Cascader 옵션을 업데이트
    setSecondCascaderOptions(
      [...new Set(data.map((item) => item.busID))].map((busID) => ({ value: busID, label: busID })),
    );
    setThirdCascaderOptions(
      [...new Set(data.map((item) => item.busName))].map((busName) => ({ value: busName, label: busName })),
    );
    setFourthCascaderOptions(
      [...new Set(data.map((item) => item.eventCode))].map((eventCode) => ({ value: eventCode, label: eventCode })),
    );
    setFifthCascaderOptions(
      [...new Set(data.map((item) => item.eventCode5))].map((eventCode5) => ({ value: eventCode5, label: eventCode5 })),
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
        <Cascader
          options={firstCascaderOptions}
          onChange={handleFirstFilterChange}
          placeholder="항목 갯수"
          disabled={!!secondFilter || !!thirdFilter || !!fourthFilter || !!fifthFilter}
        />

        <Cascader
          options={secondCascaderOptions}
          onChange={handleSecondFilterChange}
          placeholder="차량번호"
          disabled={!!thirdFilter || !!fourthFilter || !!fifthFilter}
        />

        <Cascader
          options={thirdCascaderOptions}
          onChange={handleThirdFilterChange}
          placeholder="운행사"
          disabled={!!fourthFilter || !!fifthFilter}
        />

        <Cascader
          options={fourthCascaderOptions}
          onChange={handleFourthFilterChange}
          placeholder="이벤트 발생"
          disabled={!!fifthFilter}
        />

        <Cascader options={fifthCascaderOptions} onChange={handleFifthFilterChange} placeholder="제조사" />

        <Button style={{ background: '#2B85FF', color: 'white' }}>검색</Button>
        <Button style={{ background: '#2B85FF', color: 'white' }}>전체목록</Button>
        <Button style={{ background: '#FF3232', color: 'white' }} onClick={() => setIsModalVisible(true)}>
          신규 버스 등록
        </Button>
        <NewBusModal open={isModalVisible} onClose={() => setIsModalVisible(false)} onOk={handleNewBusRegistration} />
        <Button style={{ background: '#0ACF83', color: 'white' }}>엑셀다운로드</Button>
      </div>
      {/* 모달 */}
    </>
  );
};

export default Top;
