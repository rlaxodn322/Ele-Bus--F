import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Table7 from '../../../components/table/table7';
import Table5 from '../../../components/table/table5';
import { Button } from 'antd'; // Modal과 Form을 추가로 import
import { useState, useEffect } from 'react';
import { loadMyInfoAPI1 } from '@/components/apis/company/company';
import { loadBusListAPI } from '../../../components/apis/bus/bus';
import BusCreate from '../../../components/modal/buscreate';
// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';
import * as XLSX from 'xlsx';
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100%;
  margin: 30px auto;
`;
interface Row {
  buses: any;
  companynumber: string;
  company: string;
  companylocation: string;
  companyname: string;
  day: string;
  carNumber: string;
  carinfo: string;
  carmodel: string;
  routeNumber: string;
}
const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [maintenanceHistory, setMaintenanceHistory] = useState<Row[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [buses, setBuses] = useState<any[]>([]); // 이 줄 추가
  const [buses1, setBuses1] = useState<any[]>([]); // 이 줄 추가
  // 추가: 버스 목록을 가져오는 함수
  const fetchBusList = async () => {
    try {
      const busListData = await loadBusListAPI();

      setBuses1(busListData);
    } catch (error) {
      console.error('버스 목록 불러오기 오류:', error);
    }
  };

  const fetchMyInfo = async () => {
    try {
      const myInfoData = await loadMyInfoAPI1();
      console.log(myInfoData);

      // 회사 정보만 가져와서 setMaintenanceHistory로 업데이트
      const companiesData = myInfoData.companies.map(
        (info: {
          companynumber: any;
          company: any;
          companylocation: any;
          companyname: any;
          day: any;
          buses: any[];
        }) => {
          // Extract relevant information from each company, including buses
          const { companynumber, company, companylocation, companyname, day, buses } = info;

          // Extract bus information if available
          const busData =
            buses && buses.length > 0
              ? buses.map((bus: any) => ({
                  carNumber: bus.carNumber,
                  carinfo: bus.carinfo,
                  carmodel: bus.carmodel,
                  routeNumber: bus.routeNumber,
                }))
              : [];

          return {
            companynumber,
            company,
            companylocation,
            companyname,
            day,
            buses: busData,
          };
        },
      );

      setMaintenanceHistory(companiesData);

      // 회사 정보와 해당 회사의 버스 목록을 함께 가져와서 setBuses로 업데이트
      setBuses(myInfoData.companies);
    } catch (error) {
      console.error('데이터 불러오기 오류:', error);
    }
  };
  useEffect(() => {
    fetchMyInfo();
    fetchBusList();
  }, []);

  // Modal 열기 함수
  const showModal = () => {
    setModalOpen(true);
  };

  // Modal 닫기 함수
  const handleCancel = () => {
    setModalOpen(false);
    // 데이터 다시 불러오기
    fetchMyInfo();
    fetchBusList();
  };
  // 엑셀 다운로드 함수
  const downloadExcel = (data: any[], columns: any[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    // 컬럼 레이블 정보를 엑셀에 추가
    XLSX.utils.sheet_add_aoa(worksheet, [columns.map((column: { label: any }) => column.label)], { origin: -1 });

    // 데이터를 엑셀에 추가
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 1, skipHeader: true });

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const busDataColumns = ['사업자번호', '등록일', '차량번호', '버스종류', '모델번호', '노선번호', '모델번호'];
  const busDataColumns1 = ['충전ID', '등록일', '충전용량', '누적충전', '모델'];

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
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
    },
    {
      user: 'chargerID',
      registrationDate: '2023-1108/08:30',
      status: '60kw',
      status1: '600kw',
      status2: '급속A125',
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
      <Head>
        <title>사업자조회/관리 페이지</title>
        <meta name="description" content="company" />
      </Head>
      <Page>
        <h1>사업자조회/관리</h1>
        <Top data={maintenanceHistory} onReloadData={fetchMyInfo} />
        <div
          style={{
            width: '100%',
            height: '30%',
            marginTop: '10px',
            padding: '10px',

            borderRadius: '10px',
            boxShadow: '1px 1px 2px 2px lightgray',
            background: 'white',
          }}
        >
          <div style={{ width: '100%', height: '90%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '90%', marginRight: '20px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>버스 등록 현황</h1>
                <div>
                  <Button style={{ marginRight: '5px' }} onClick={showModal}>
                    버스 등록
                  </Button>
                  <Button
                    style={{ marginRight: '5px' }}
                    onClick={() => downloadExcel(buses1, busDataColumns, '버스_등록_현황')}
                  >
                    엑셀다운로드
                  </Button>
                </div>
              </div>
              <BusCreate open={modalOpen} onCancel={handleCancel} />
              <Table7 a="전체모델" data={Array.isArray(buses1) ? buses1 : []} columns={busDataColumns} />
            </div>
            <div style={{ width: '90%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>충전기 등록 현황</h1>
                <Button onClick={() => downloadExcel(dummyTableData1, busDataColumns1, '충전기_등록_현황')}>
                  엑셀다운로드
                </Button>
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
