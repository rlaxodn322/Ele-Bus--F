import MainLayout from '../../../layouts/index';
import Card from '../../../components/card/dtgcard';
import Table3 from '../../../components/table/table3company';
import { Button } from 'antd';
import { Page } from './style';
const busDataColumns2 = ['등록일자', '사용자', '상태'];
const dummyTableData2 = [
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1235',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1236',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1237',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1238',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '화성여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
  {
    user: '동탄여객',
    registrationDate: '경기11가1234',
    status: '운행중',
  },
];

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
  { id: 15, vehicle: '차량2', status: '마지막 제출일', battery: '' },

  // 필요한 만큼 데이터를 추가할 수 있습니다.
];
const MyPage = () => {
  return (
    <>
      <Page>
        <h2>DTG 관리</h2>
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
            <h1 style={{ marginLeft: '10px' }}>차량 목록</h1>
            <Table3 data={dummyTableData2} columns={busDataColumns2} />
          </div>
          <div
            style={{ width: '100%', marginRight: '20px', borderRadius: '10px', boxShadow: '1px 1px 2px 2px lightgray' }}
          >
            <h1>DTG 실시간 기록</h1>
            <Card data={dummyData}></Card>
            <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px', marginTop: '20px' }}>
              <Button>다운로드</Button>
            </div>
          </div>
          <div
            style={{ width: '100%', marginRight: '20px', borderRadius: '10px', boxShadow: '1px 1px 2px 2px lightgray' }}
          >
            <h1>DTG 과거 이력</h1>
            <Card data={dummyData}></Card>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
