import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Table7 from '../../../components/table/table7';
import Table5 from '../../../components/table/table5';
import { Button } from 'antd';
import { Page } from './style';
const MyPage = () => {
  const busDataColumns = ['버스ID', '등록일', '차량번호', '차량등록', '차대번호', '모델번호', '통신모듈'];
  const busDataColumns1 = ['충전ID', '등록일', '충전용량', '누적충전', '모델'];

  const dummyTableData = [
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:31',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:35',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:37',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA125',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },

    // Add more dummy data as needed
  ];
  const dummyTableData1 = [
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:31',
      status: '60kw',
      status1: '600kw',
      status2: '급속A123',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:32',
      status: '60kw',
      status1: '600kw',
      status2: '급속A123',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    // Add more dummy data as needed
  ];
  return (
    <>
      <Page>
        <h1>운송사조회/관리</h1>
        <Top />
        <div
          style={{
            width: '100%',
            height: '40%',
            marginTop: '10px',
            padding: '10px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '1px 1px 2px 2px lightgray',
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '90%', marginRight: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>버스 등록 현황</h1>
                <Button>엑셀다운로드</Button>
              </div>

              <Table7 data={dummyTableData} columns={busDataColumns} />
            </div>
            <div style={{ width: '90%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>충전기 등록 현황</h1>
                <Button>엑셀다운로드</Button>
              </div>

              <Table5 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
