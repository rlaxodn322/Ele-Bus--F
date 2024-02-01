import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Middle from '../../../components/company/middle';
import { Page } from './style';
const MyPage = () => {
  const dummyTableData = [
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-02',
      status1: '2024-01-02',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    {
      user: 'busID',
      registrationDate: '경기11바1234',
      status: '2024-01-01',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'AAA123',
      status4: 'RSVP123',
    },
    // Add more dummy data as needed
  ];
  return (
    <>
      <Page>
        <h1>운송사조회/관리</h1>
        <Top />
        <Middle data={dummyTableData} /> {/* Pass dummyTableData as a prop */}
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
