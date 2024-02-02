import MainLayout from '../../../layouts/index';
import { Page } from './style';
import Card from '../../../components/card/card6';
import Card1 from '../../../components/card/card4';
import Map from '../../../components/apis/kakao/map';
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
    // 다른 위치 정보도 추가해주세요
  ];
  const mapHeight = '370px';
  return (
    <>
      <Page>
        <div
          style={{
            width: '100%',
            height: '60%',
            border: '1px solid lightgray',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '10px',
            background: 'white',
          }}
        >
          <div
            style={{
              width: '33%',
              height: '100%',
            }}
          >
            <h1>A/S요청 전기버스 위치</h1>
            <Map markerPositions={markerPositions} mapHeight={mapHeight} />
          </div>
          <div style={{ width: '33%', height: '100%', border: '1px solid lightgray', borderRadius: '10px' }}></div>
          <div style={{ width: '33%', height: '100%', border: '1px solid lightgray', borderRadius: '10px' }}></div>
        </div>
        <div
          style={{
            width: '100%',
            height: '40%',
            border: '1px solid lightgray',
            marginTop: '20px',
            borderRadius: '10px',
            background: 'white',
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px', width: '100%' }}>
              <h1>A/S 요청 이력</h1>
              <Card data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ width: '100%' }}>
              <h1>고장정보</h1>
              <Card1 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
