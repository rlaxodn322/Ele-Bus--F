import Head from 'next/head';
import MainLayout from '../layouts';
// import { Page } from './style';
import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd'; // antd
import Map from '../components/apis/kakao/map';
import BusCard from '../components/card/buscard';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { loaddata } from '../components/apis/bus/bus';
import ScrollToTopButton from '../components/Scroll/ScrollToTopButton';
import ScrollToDownButton from '../components/Scroll/ScrollToDownButton';
interface Vehicle {
  turnYn: string;
  stationSeq: string;
  regionName: string;
  plateNo: string;
  routeId: string;
  location: string;
  soc: string;
  note: string;
}
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */

  width: 1370px;
  height: 100%;
  margin: 0 auto;
  display: flex;

  @media (max-width: 1100px) {
    width: 100%;
    height: 100%;
    margin-top: 50px;
    margin-bottom: 10px;
  }
`;
const PageWapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 1100px) {
    width: 100%;

    flex-wrap: wrap; /* flex items이 여러 줄로 나뉠 수 있도록 설정 */
  }
`;
// Dummy 데이터
const MapBox = styled.div`
  width: 50%;
  @media (max-width: 1100px) {
    width: 97%;
  }
`;
const Busstatic = styled.div`
  width: 49.5%;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
const CarinfoTable = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 97%;
  height: 400px;
  margin-left: 10px;
  box-shadow: 1px 1px 1px 2px lightgray;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 1100px) {
    width: 97%;
  }
`;
const DivTable = styled.div`
  flex: 1;
  @media (max-width: 1100px) {
    font-size: 10px;
  }
`;
const DivTable2 = styled.div`
  flex: 1;
  text-align: center;
  @media (max-width: 1100px) {
    font-size: 10px;
  }
`;
const Title = styled.div`
  @media (max-width: 1100px) {
  }
`;

// const dummyVehicleData = [
//   {
//     company: '화성여객',
//     route: '경기11가1234',
//     vehicleNum: 'Route 1',
//     location: '운행',
//     soc: '80%',
//     note: 'no',
//   },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },

//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '충전/대기', soc: '65%', note: 'no' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },

//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   // Add more dummy data as needed
// ];

const Home = () => {
  const [vehicleData, setVehicleData] = useState<Vehicle[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('전체'); // 선택된 위치 상태 추가
  const [sortingOrder] = useState<string | string[]>(['latest']);
  const [selectedCompany, setSelectedCompany] = useState<string | null>('전체보기');
  const [vihiclelength, setvihiclelength] = useState<number>(0); // 초기값을 0 또는 다른 숫자로 설정(); // 초기값을 0 또는 다른 숫자로 설정
  // eslint-disable-next-line no-unused-vars
  const [filteredData, setFilteredData] = useState<Vehicle[]>([]);
  useEffect(() => {
    const filteredData = filteredByLocation();
    setFilteredData(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loaddata(); // loaddata 함수로 데이터를 가져옴
        setVehicleData(response.mergedData);
        setvihiclelength(response.mergedData.length);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);
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
  const uniqueCompanies = Array.from(new Set(vehicleData.map((vehicle) => vehicle.regionName)));

  // 운행중인 차량 정보 필터링 함수
  const companyOptions = [
    { value: '전체보기', label: '전체보기' },
    ...uniqueCompanies.map((company) => ({ value: company, label: company })),
  ];
  const getFilteredVehicleData = () => {
    if (selectedLocation === '전체' && selectedCompany === '전체보기') {
      return vehicleData;
    } else {
      return vehicleData.filter((vehicle) => {
        return (
          (selectedLocation === '전체' || vehicle.regionName === selectedLocation) &&
          (selectedCompany === '전체보기' || vehicle.regionName === selectedCompany)
        );
      });
    }
  };

  const sortedVehicleData = getFilteredVehicleData().sort((a, b) => {
    const companyA = a.regionName.toLowerCase();
    const companyB = b.regionName.toLowerCase();

    if (sortingOrder === 'asc') {
      return companyA.localeCompare(companyB);
    } else {
      return companyB.localeCompare(companyA);
    }
  });

  const filterByLocationNote = (note: string) => {
    return sortedVehicleData.filter((vehicle) => vehicle.note === note);
  };

  const filteredByLocation = () => {
    switch (selectedLocation) {
      case '전체':
        return sortedVehicleData;
      case '운행':
        return sortedVehicleData.filter((vehicle) => vehicle.note === '운행');
      case '충전/대기':
        return filterByLocationNote('충전/대기');
      case '고장':
        return filterByLocationNote('고장');
      default:
        return sortedVehicleData.filter((vehicle) => vehicle.note === selectedLocation);
    }
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  };
  const handleScrollToDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      // behavior: 'smooth',
    });
  };
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
              <h1 style={{ marginLeft: '10px' }}>
                버스상태
                <Link href="./auth/car">
                  <img
                    style={{ marginLeft: '5px', width: '18px', height: '18px' }}
                    src="images/plus-circle-1427-svgrepo-com.svg"
                  ></img>
                </Link>
              </h1>
            </Title>

            <BusCard onFilterChange={(location) => setSelectedLocation(location)} vihiclelength={vihiclelength} />

            <Title>
              <h1 style={{ marginLeft: '10px', marginBottom: '0' }}>
                운행중인 차량정보
                <Link href="./auth/statistics">
                  <img
                    style={{ marginLeft: '5px', width: '18px', height: '18px' }}
                    src="images/plus-circle-1427-svgrepo-com.svg"
                  ></img>
                </Link>
              </h1>
            </Title>
            <div
              style={{
                marginRight: '10px',
                marginBottom: '5px',
                border: '0px',
                display: 'flex',
                justifyContent: 'end',
              }}
            >
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
              {filteredByLocation().map((vehicle, index) => (
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
                    color:
                      vehicle.note === '운행'
                        ? 'blue'
                        : vehicle.note === '충전/대기'
                        ? 'green'
                        : vehicle.note === '고장'
                        ? 'red'
                        : 'black',
                  }}
                >
                  <DivTable>{vehicle.regionName}</DivTable>
                  <DivTable>{vehicle.plateNo}</DivTable>
                  <DivTable>{vehicle.routeId}</DivTable>
                  <DivTable>{vehicle.note}</DivTable>
                  <DivTable>{vehicle.stationSeq}</DivTable>
                  <DivTable>{vehicle.turnYn}</DivTable>
                </h6>
              ))}
            </CarinfoTable>
          </Busstatic>
        </PageWapper>
      </Page>
      <ScrollToTopButton handleScrollToTop={handleScrollToTop}></ScrollToTopButton>
      <ScrollToDownButton handleScrollToDown={handleScrollToDown}></ScrollToDownButton>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
