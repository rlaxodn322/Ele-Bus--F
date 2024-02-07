import MainLayout from '../../../layouts/index';
// import { Page } from './style';
import Table6 from '../../../components/table/talbe6';
import Table4 from '../../../components/table/talbe4';
import Map from '../../../components/apis/kakao/map';
import Graph from '../../../components/graph/graph1';
import styled from '@emotion/styled';
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 30px auto;
`;
const busDataColumns = ['사용자', '날짜', '위치', '버스ID', '요청시간', '담당자'];
const busDataColumns1 = ['날짜', '위치', '버스ID', '고장'];
const dummyTableData = [
  {
    user: 'busID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:32',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '이앤비',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:30',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '이카플러그',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:30',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:30',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:30',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
  },

  // Add more dummy data as needed
];
const dummyTableData1 = [
  { registrationDate: '2023-1108/08:30', user: 'AREA', status: 'A002', status2: '전원불량' },
  { registrationDate: '2023-1108/08:32', user: 'AREA', status: 'A002', status2: '전원불량' },
  { registrationDate: '2023-1108/08:33', user: 'AREA', status: 'A002', status2: '전원불량' },
  { registrationDate: '2023-1108/08:34', user: 'AREA', status: 'A002', status2: '전원불량' },
  { registrationDate: '2023-1108/08:30', user: 'AREA', status: 'A002', status2: '전원불량' },
  { registrationDate: '2023-1108/08:30', user: 'AREA', status: 'A002', status2: '전원불량' },

  // Add more dummy data as needed
];
const MyPage = () => {
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
    // 다른 위치 정보도 추가해주세요
  ];
  const mapHeight = '335px';
  return (
    <>
      <Page>
        <div
          style={{
            width: '100%',
            height: '45%',

            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '1px 1px 2px 2px lightgray',
          }}
        >
          <div
            style={{
              width: '33%',
              height: '100%',
              padding: '10px',
            }}
          >
            <h1>A/S요청 전기버스 위치</h1>
            <Map markerPositions={markerPositions} mapHeight={mapHeight} />
          </div>
          <div style={{ width: '33%', height: '100%', borderRadius: '10px' }}>
            <Graph />
          </div>
          <div style={{ width: '33%', height: '100%', borderRadius: '10px' }}>
            <Graph />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '40%',

            marginTop: '20px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '1px 1px 2px 2px lightgray',
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px', width: '60%' }}>
              <h1>A/S 요청 이력</h1>
              <Table6 data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ width: '40%' }}>
              <h1>고장정보</h1>
              <Table4 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
