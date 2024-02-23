import Head from 'next/head';
import MainLayout from '../layouts';
// import { Page } from './style';
import React, { useState } from 'react';

import { Cascader } from 'antd'; // antd
import Map from '../components/apis/kakao/map';
import BusCard from '../components/card/buscard';

import styled from '@emotion/styled';

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100%;
  margin: 0 auto;
`;
// Dummy 데이터

const dummyVehicleData = [
  {
    company: '화성여객',
    route: '경기11가1234',
    vehicleNum: 'Route 1',
    location: '운행',
    soc: '80%',
    note: 'no',
  },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '충전/대기', soc: '65%', note: 'no' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  // Add more dummy data as needed
];

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('전체'); // 선택된 위치 상태 추가
  const [sortingOrder] = useState<string | string[]>(['latest']);
  const [selectedCompany, setSelectedCompany] = useState<string | null>('전체보기');

  // Add markers for 10 locations in Osan City
  const markerPositions = [
    { title: '하남운수', latlng: { lat: 37.549899, lng: 127.216505 } },
    { title: '오산운수', latlng: { lat: 37.149528, lng: 127.077071 } },
    { title: '수원운수', latlng: { lat: 37.263573, lng: 127.028601 } },
    { title: '평택운수', latlng: { lat: 36.990437, lng: 127.092379 } },
    { title: '부산운수', latlng: { lat: 35.179554, lng: 129.075642 } },
    { title: '부산운수', latlng: { lat: 35.179554, lng: 129.075642 } },
    { title: '안성운수', latlng: { lat: 36.990437, lng: 127.092379 } },
    { title: '포항운수', latlng: { lat: 36.019986, lng: 129.342938 } },
    { title: '울산운수', latlng: { lat: 35.538377, lng: 129.311359 } },
    { title: '대구운수', latlng: { lat: 35.871435, lng: 128.601445 } },
    { title: '대구운수', latlng: { lat: 35.871435, lng: 128.601445 } },
    { title: '대천운수', latlng: { lat: 36.491065, lng: 126.494356 } },
    { title: '광주운수', latlng: { lat: 35.491065, lng: 126.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
    { title: '남원운수', latlng: { lat: 35.491065, lng: 127.494356 } },
  ];
  const mapHeight = '745px';
  const uniqueCompanies = Array.from(new Set(dummyVehicleData.map((vehicle) => vehicle.company)));

  // 운행중인 차량 정보 필터링 함수
  const companyOptions = [
    { value: '전체보기', label: '전체보기' },
    ...uniqueCompanies.map((company) => ({ value: company, label: company })),
  ];
  const getFilteredVehicleData = () => {
    if (selectedLocation === '전체' && selectedCompany === '전체보기') {
      return dummyVehicleData;
    } else {
      return dummyVehicleData.filter((vehicle) => {
        return (
          (selectedLocation === '전체' || vehicle.location === selectedLocation) &&
          (selectedCompany === '전체보기' || vehicle.company === selectedCompany)
        );
      });
    }
  };

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
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      <Page>
        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
          <div style={{ width: '49.5%', height: '100%' }}>
            <h1>버스 현황</h1>
            <Map markerPositions={markerPositions} mapHeight={mapHeight} />
          </div>
          <div style={{ width: '49.5%', height: '100%' }}>
            <h1 style={{ marginLeft: '20px' }}>버스상태</h1>
            <BusCard onFilterChange={(location) => setSelectedLocation(location)} />
            <h1 style={{ marginLeft: '20px', marginBottom: '0' }}>운행중인 차량정보</h1>
            <div style={{ marginBottom: '5px', border: '0px', display: 'flex', justifyContent: 'end' }}>
              <Cascader
                options={companyOptions}
                onChange={(value) => {
                  // Removed 'selectedOptions' since it's not being used
                  const selectedCompany = value && value.length > 0 ? String(value[0]) : '전체보기';
                  setSelectedCompany(selectedCompany);
                }}
                defaultValue={['전체보기']}
                style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                width: '98.5%',
                height: 'calc(43% - 30px)',
                marginLeft: '10px',
                boxShadow: '1px 1px 1px 2px lightgray',
                borderRadius: '10px',
                background: 'white',
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
                  zIndex: '1',
                  fontSize: '17px',
                }}
              >
                <div style={{ flex: 1, textAlign: 'center' }}>운행사</div>
                <div style={{ flex: 1, textAlign: 'center' }}>차량번호</div>
                <div style={{ flex: 1, textAlign: 'center' }}>운행노선</div>
                <div style={{ flex: 1, textAlign: 'center' }}>운행상태</div>
                <div style={{ flex: 1, textAlign: 'center' }}>SOC</div>
                <div style={{ flex: 1, textAlign: 'center' }}>이벤트발생</div>
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
                    fontSize: '14px',
                    // 수정된 부분 시작

                    color:
                      vehicle.location === '운행'
                        ? vehicle.note === 'no'
                          ? 'blue'
                          : 'red'
                        : vehicle.location === '충전/대기'
                        ? 'green'
                        : 'red',
                    // 수정된 부분 끝
                  }}
                >
                  <div style={{ flex: 1 }}>{vehicle.company}</div>
                  <div style={{ flex: 1 }}>{vehicle.route}</div>
                  <div style={{ flex: 1 }}>{vehicle.vehicleNum}</div>
                  <div style={{ flex: 1 }}>{vehicle.location}</div>
                  <div style={{ flex: 1 }}>{vehicle.soc}</div>
                  <div style={{ flex: 1 }}>{vehicle.note}</div>
                </h6>
              ))}
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
