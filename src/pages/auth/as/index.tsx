import MainLayout from '../../../layouts/index';
import { Page } from './style';
import { Input, Button } from 'antd';
import Card from '../../../components/card/card7';
import Card4 from '../../../components/card/card4';
import Card3 from '../../../components/card/card3';
const busDataColumns = ['부품번호', '날짜', '부품위치', '창고위치', '요청시간', '담당자', '부품'];
const busDataColumns1 = ['날짜', '위치', '버스ID', '고장'];
const busDataColumns2 = ['등록일자', '사용자', '상태'];
const dummyTableData = [
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '바퀴',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '통신',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08/31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },

  // Add more dummy data as needed
];
const dummyTableData1 = [
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: 'A002',
    status1: '0',
    status2: '전원불량',
    status3: '3',
    status4: '4',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: 'A002',
    status1: '0',
    status2: '전원불량',
    status3: '3',
    status4: '4',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: 'A002',
    status1: '0',
    status2: '전원불량',
    status3: '3',
    status4: '4',
  },

  // Add more dummy data as needed
];
const dummyTableData2 = [
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
    status1: '값1',
    status2: '값2',
    status3: '값3',
    status4: '값4',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
    status1: '값1',
    status2: '값2',
    status3: '값3',
    status4: '값4',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
    status1: '값1',
    status2: '값2',
    status3: '값3',
    status4: '값4',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
    status1: '값1',
    status2: '값2',
    status3: '값3',
    status4: '값4',
  },
];
const MyPage = () => {
  return (
    <>
      <Page>
        <div
          style={{
            width: '100%',
            height: '60%',
            boxShadow: '1px 1px 2px 2px lightgray',
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '10px',
            background: 'white',
          }}
        >
          <div
            style={{
              margin: '10px',
              width: '33%',
              height: '100%',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h1>부품 검색</h1>
              <Input placeholder="부품검색" style={{ width: '300px', marginBottom: '30px' }}></Input>
              <Button>🔍</Button>
            </div>

            <Card3 data={dummyTableData2} columns={busDataColumns2} />
          </div>
          <div style={{ width: '33%', height: '100%', borderRadius: '10px' }}></div>
          <div style={{ width: '33%', height: '100%', borderRadius: '10px' }}></div>
        </div>
        <div
          style={{
            width: '100%',
            height: '40%',
            border: '1px solid lightgray',
            marginTop: '20px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '1px 1px 2px 2px lightgray',
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px', width: '100%' }}>
              <h1>A/S 요청 이력</h1>
              <Card data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ width: '100%' }}>
              <h1>고장정보</h1>
              <Card4 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
