import React, { useState } from 'react';

import { Cascader } from 'antd'; // antd의 Cascader 컴포넌트를 사용
import Map from '../apis/kakao/map';
import RightTop from './top';

// Dummy 데이터
const dummyVehicleData = [
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: '' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: '' },
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: '' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: '' },
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: '' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: '' },
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: '' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: '' },
  // Add more dummy data as needed
];
const dummyEventHistory = [
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: '' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: '' },
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: '' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: '' },
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: '' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: '' },
  // Add more dummy data as needed
];

const Middle = () => {
  const uniqueCompanies = Array.from(new Set(dummyVehicleData.map((vehicle) => vehicle.company)));
  const getCircleColor = (importance: string) => {
    return importance === 'High' ? 'red' : 'green';
  };
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  // 운행중인 차량 정보 필터링 함수
  const companyOptions = [
    { value: '전체보기', label: '전체보기' },
    ...uniqueCompanies.map((company) => ({ value: company, label: company })),
  ];
  // 운행중인 차량 정보 필터링 함수
  const getFilteredVehicleData = () => {
    if (selectedCompany === null || selectedCompany === '전체보기') {
      return dummyVehicleData;
    } else {
      return dummyVehicleData.filter((vehicle) => vehicle.company === selectedCompany);
    }
  };
  const sortedEventHistory = [...dummyEventHistory].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (sortingOrder === 'latest') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  const sortedVehicleData = getFilteredVehicleData().sort((a, b) => {
    const companyA = a.company.toLowerCase();
    const companyB = b.company.toLowerCase();

    if (sortingOrder === 'asc') {
      return companyA.localeCompare(companyB);
    } else {
      return companyB.localeCompare(companyA);
    }
  });

  return (
    <>
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%',
          width: '100%',
        }}
      >
        <div style={{ width: '49.5%', height: '100%' }}>
          <Map />
        </div>
        <div style={{ width: '49.5%', height: '100%' }}>
          <h1 style={{ marginLeft: '20px' }}>버스상태</h1>
          <RightTop />
          <h1 style={{ marginLeft: '20px', marginBottom: '0' }}>운행중인 차량정보</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center', // 세로 중앙 정렬
              justifyContent: 'flex-end', // 오른쪽 정렬
              margin: '0px',
              border: '0px',
            }}
          >
            <Cascader
              options={companyOptions}
              onChange={(value) => {
                // value가 배열이므로 첫 번째 요소를 선택
                setSelectedCompany(value[0] as string | null);
              }}
              defaultValue={['전체보기']}
              style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto', // 스크롤이 필요한 경우 자동으로 스크롤 생성
              width: '98.5%',
              height: 'calc(27.3% - 30px)', // 헤더 높이만큼 뺀 값으로 설정
              marginLeft: '10px',
              boxShadow: '1px 1px 1px 2px lightgray',
              borderRadius: '10px',
            }}
          >
            {/* 운행중인 차량 정보 */}
            <div
              style={{
                position: 'sticky',
                top: '0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                background: '#2CA0F3',
                color: 'white',
                borderRadius: '10px',
                zIndex: '1', // 헤더가 다른 요소 위로 올라가도록 설정
              }}
            >
              <div style={{ flex: 1, textAlign: 'center' }}>운행사</div>
              <div style={{ flex: 1, textAlign: 'center' }}>운행노선</div>
              <div style={{ flex: 1, textAlign: 'center' }}>차량번호</div>
              <div style={{ flex: 1, textAlign: 'center' }}>SOC</div>
              <div style={{ flex: 1, textAlign: 'center' }}>위치</div>
              <div style={{ flex: 1, textAlign: 'center' }}>비고</div>
            </div>
            {sortedVehicleData.map((vehicle, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                <div style={{ flex: 1 }}>{vehicle.company}</div>
                <div style={{ flex: 1 }}>{vehicle.route}</div>
                <div style={{ flex: 1 }}>{vehicle.vehicleNum}</div>
                <div style={{ flex: 1 }}>{vehicle.soc}</div>
                <div style={{ flex: 1 }}>{vehicle.location}</div>
                <div style={{ flex: 1 }}>{vehicle.note}</div>
              </h6>
            ))}
          </div>

          <h1 style={{ marginLeft: '20px', marginBottom: '0' }}>차량 고장 이벤트 이력</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center', // 세로 중앙 정렬
              justifyContent: 'flex-end', // 오른쪽 정렬
              margin: '0px',
              border: '0px',
            }}
          >
            <Cascader
              options={[
                { value: 'latest', label: '최신순' },
                { value: 'oldest', label: '늦은 순' },
              ]}
              onChange={(value) => {
                // 숫자인 경우 처리
                const sortOrder = typeof value[0] === 'number' ? 'latest' : value[0];
                setSortingOrder(sortOrder);
              }}
              defaultValue={['latest']}
              style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              width: '98.5%',
              height: 'calc(19.5% - 30px)', // 헤더 높이만큼 뺀 값으로 설정
              marginLeft: '10px',
              boxShadow: '1px 1px 1px 2px lightgray',
              borderRadius: '10px',
            }}
          >
            <div
              style={{
                position: 'sticky',
                top: '0',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                background: '#2CA0F3',
                color: 'white',
                borderRadius: '10px',
                zIndex: '1', // 헤더가 다른 요소 위로 올라가도록 설정
              }}
            >
              <div style={{ flex: 1, textAlign: 'center' }}>날짜</div>
              <div style={{ flex: 1, textAlign: 'center' }}>차량번호</div>
              <div style={{ flex: 1, textAlign: 'center' }}>고장정보</div>
              <div style={{ flex: 1, textAlign: 'center' }}>중요도</div>
              <div style={{ flex: 1, textAlign: 'center' }}>비고</div>
            </div>
            {sortedEventHistory.map((event, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                <div style={{ flex: 1 }}>{event.date}</div>
                <div style={{ flex: 1 }}>{event.vehicleNum}</div>
                <div style={{ flex: 1 }}>{event.issue}</div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: getCircleColor(event.importance),
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}> {event.note}</div>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
