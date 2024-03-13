import Head from 'next/head';
import MainLayout from '../layouts';
// import { Page } from './style';
import React, { useState } from 'react';
import { Cascader } from 'antd'; // antd
import Map from '../components/apis/kakao/map';
import BusCard from '../components/card/buscard';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    width: 330px;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;
const PageWapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    width: 330px;

    flex-wrap: wrap; /* flex items이 여러 줄로 나뉠 수 있도록 설정 */
  }
`;
// Dummy 데이터
const MapBox = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Busstatic = styled.div`
  width: 49.5%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CarinfoTable = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 98.5%;
  height: 400px;
  margin-left: 10px;
  box-shadow: 1px 1px 1px 2px lightgray;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 768px) {
    width: 94%;
  }
`;
const DivTable = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const DivTable2 = styled.div`
  flex: 1;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Title = styled.div`
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
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
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '충전/대기', soc: '65%', note: 'no' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },

  { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
  // Add more dummy data as needed
];

const Home = () => {
  const [selectedLocation, setSelectedLocation] = useState('전체'); // 선택된 위치 상태 추가
  const [sortingOrder] = useState<string | string[]>(['latest']);
  const [selectedCompany, setSelectedCompany] = useState<string | null>('전체보기');
  const router = useRouter();

  // 세션 스토리지에서 로그인 데이터를 가져옵니다.
  const isAuthenticated = typeof window !== 'undefined' && Boolean(sessionStorage.getItem('userData'));

  // 로그인되어 있지 않으면 로그인 페이지로 리디렉션합니다.
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

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
  ];
  const mapHeight = '740px';
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
        <PageWapper>
          <MapBox>
            <Title>
              <h1>버스 현황</h1>
            </Title>
            <Map markerPositions={markerPositions} mapHeight={mapHeight} />
          </MapBox>
          <Busstatic>
            <Title>
              <h1 style={{ marginLeft: '10px' }}>버스상태</h1>
            </Title>
            <BusCard onFilterChange={(location) => setSelectedLocation(location)} />
            <Title>
              <h1 style={{ marginLeft: '10px', marginBottom: '0' }}>운행중인 차량정보</h1>
            </Title>
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
            <CarinfoTable>
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
                <DivTable2>운행사</DivTable2>
                <DivTable2>차량번호</DivTable2>
                <DivTable2>운행노선</DivTable2>
                <DivTable2>운행상태</DivTable2>
                <DivTable2>SOC</DivTable2>
                <DivTable2>이벤트발생</DivTable2>
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
                  <DivTable>{vehicle.company}</DivTable>
                  <DivTable>{vehicle.route}</DivTable>
                  <DivTable>{vehicle.vehicleNum}</DivTable>
                  <DivTable>{vehicle.location}</DivTable>
                  <DivTable>{vehicle.soc}</DivTable>
                  <DivTable>{vehicle.note}</DivTable>
                </h6>
              ))}
            </CarinfoTable>
          </Busstatic>
        </PageWapper>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
