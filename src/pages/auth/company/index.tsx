import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Table7 from '../../../components/table/table7';
import Table5 from '../../../components/table/table5';
// import { Button } from 'antd'; // Modal과 Form을 추가로 import
import Button from 'antd-button-color';
import { useState, useEffect } from 'react';
import { loadMyInfoAPI1 } from '@/components/apis/company/company';
import { loadBusListAPI } from '../../../components/apis/bus/bus';
import BusCreate from '../../../components/modal/buscreate';
// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';
import * as XLSX from 'xlsx';
import { useRouter } from 'next/router';
import React from 'react';

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100%;
  margin: 30px auto;
  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 70px;
    background-color: white;
  }
`;
const BusCharger = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    width: 100%;
    flex-direction: column;
  }
`;
const TableContainer = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  background-color: white;
  @media (max-width: 1100px) {
    box-shadow: none;
    width: 100%;
    font-size: 8px;
    margin-left: 3%;
  }
`;
const Title = styled.div`
  @media (max-width: 1100px) {
    font-weight: 600;
    font-size: 16px;
  }
`;
const ButtonWapper = styled.div`
  @media (max-width: 1100px) {
    display: none;
  }
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
  const router = useRouter();

  // 세션 스토리지에서 로그인 데이터를 가져옵니다.
  const isAuthenticated = typeof window !== 'undefined' && Boolean(sessionStorage.getItem('userData'));
  const userDataString = typeof window !== 'undefined' ? sessionStorage.getItem('userData') : null;
  const userData = userDataString ? JSON.parse(userDataString) : {};
  // const adminValue = userData.admin;
  // console.log(adminValue);
  // 로그인되어 있지 않으면 로그인 페이지로 리디렉션합니다.
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
    if (userData.admin !== null && userData.admin === '02') {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, userData]);
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
      // console.log(myInfoData);

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
        <Title>
          <h1>사업자조회/관리</h1>
        </Title>
        <Top data={maintenanceHistory} onReloadData={fetchMyInfo} />
        <TableContainer>
          <BusCharger>
            <div style={{ width: '100%', marginRight: '20px', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title>
                  <h4>버스 등록 현황</h4>
                </Title>

                <div style={{ display: 'flex' }}>
                  <Button type="primary" style={{ marginRight: '5px' }} onClick={showModal}>
                    버스 등록
                  </Button>
                  <ButtonWapper>
                    <Button
                      style={{ marginRight: '5px', background: '#27B964', color: 'white' }}
                      onClick={() => downloadExcel(buses1, busDataColumns, '버스_등록_현황')}
                    >
                      엑셀다운로드
                    </Button>
                  </ButtonWapper>
                </div>
              </div>
              <BusCreate open={modalOpen} onCancel={handleCancel} />

              <Table7 a="전체모델" data={Array.isArray(buses1) ? buses1 : []} columns={busDataColumns} />
            </div>
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title>
                  <h4>충전기 등록 현황</h4>
                </Title>
                <ButtonWapper>
                  <Button
                    style={{ marginRight: '5px', background: '#27B964', color: 'white' }}
                    onClick={() => downloadExcel(dummyTableData1, busDataColumns1, '충전기_등록_현황')}
                  >
                    엑셀다운로드
                  </Button>
                </ButtonWapper>
              </div>

              <Table5 data={dummyTableData1} columns={busDataColumns1} />
            </div>
          </BusCharger>
        </TableContainer>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
