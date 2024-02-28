import MainLayout from '../../../layouts/index';
// import { Page } from './style';
import InputButton from '../../../components/inputbutton/inputbutton';
import Table7 from '../../../components/table/table7';
import Table4 from '../../../components/table/talbe4';
import Table3 from '../../../components/table/table3';
import DivBox from '../../../components/div/divbox';
import Button3 from '../../../components/button/button3';
// import Button2 from '../../../components/button/button2';
import NewItem from '../../../components/input/newItem';
import styled from '@emotion/styled';
import Head from 'next/head';
import { loadMyInfoAPI } from '@/components/apis/item/item';
import { useEffect, useState } from 'react';

const Page = styled.section`
  width: 1370px;
  height: 100%;
  margin: 30px auto;
`;

const busDataColumns = ['부품번호', '날짜', '부품위치', '창고위치', '요청시간', '담당자', '부품'];
const busDataColumns1 = ['날짜', '위치', '버스ID', '고장'];
const busDataColumns2 = ['등록일자', '담당이름', '부품명'];
const dummyTableData = [
  {
    user: 'busID',
    registrationDate: '2023-1108/08:30',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '이카플러그',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '이카플러그',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:25',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '바퀴',
  },
  {
    user: 'busID',
    registrationDate: '2023-1105/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '통신',
  },
  {
    user: 'busID',
    registrationDate: '2023-1108/08:31',
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
    registrationDate: '2023-1108/08:30',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },
  {
    registrationDate: '2023-1108/08:30',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },
  {
    registrationDate: '2023-1108/08:30',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },
  {
    registrationDate: '2023-1108/08:30',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },
  {
    registrationDate: '2023-1108/08:30',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },
  {
    registrationDate: '2023-1108/08:31',
    user: 'AREA',
    status: 'A002',
    status2: '전원불량',
  },

  // Add more dummy data as needed
];

const MyPage = () => {
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);

  const fetchMyInfo = async () => {
    try {
      const myInfoData = await loadMyInfoAPI();
      const maintenanceHistoryData = myInfoData.map(
        (info: { number: any; name: any; date: any; memo: any; status: any }) => ({
          number: info.number,
          name: info.name,
          date: info.date,
          memo: info.memo,
          status: info.status,
        }),
      );
      setMaintenanceHistory(maintenanceHistoryData);
      console.log(maintenanceHistory);
    } catch (error) {
      console.error('데이터 불러오기 오류:', error);
    }
  };

  useEffect(() => {
    fetchMyInfo();
  }, []);

  const handleInput5Submit = (values: any) => {
    // 여기에 신규 부품 입력이 완료된 후의 로직을 구현합니다.
    console.log('입력 완료:', values);
    // 필요한 로직을 추가하세요.
  };
  const handleInput5Cancel = () => {
    // 여기에 취소 버튼이 클릭되었을 때의 로직을 구현합니다.
    console.log('입력 취소');
    // 필요한 로직을 추가하세요.
  };

  return (
    <>
      <Head>
        <title>A/S페이지</title>
        <meta name="description" content="as" />
      </Head>

      <Page>
        <h1 style={{}}>A/S서비스 부품관리</h1>
        <div
          style={{
            width: '100%',
            height: '40%',
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
            <Table3 data={maintenanceHistory} columns={busDataColumns2} />
          </div>

          <div style={{ margin: '10px', width: '33%', height: '100%', borderRadius: '10px' }}>
            <InputButton a="부품 관리" onChange={function (): void {}} />
            <DivBox a="부품번호" b="담당자 이름" c="등록일자" d="기타사항" e="상태" />
            <Button3 a="편집" b="삭제" c="취소" />
          </div>
          <div style={{ margin: '10px', width: '33%', height: '100%', borderRadius: '10px' }}>
            <NewItem
              onReloadData={fetchMyInfo}
              title="신규 부품 입력"
              onSubmit={handleInput5Submit} // handleInput5Submit 함수는 신규 부품 입력이 완료되었을 때 호출되어야 하는 함수입니다.
              onCancel={handleInput5Cancel} // handleInput5Cancel 함수는 취소 버튼이 클릭되었을 때 호출되어야 하는 함수입니다.
              placeholders={[]}
            />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '30%',
            border: '1px solid lightgray',
            marginTop: '20px',
            borderRadius: '10px',
            background: 'white',
            boxShadow: '1px 1px 2px 2px lightgray',
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px', width: '60%' }}>
              <h1>부품 리스트</h1>
              <Table7 a="전체 담당자" data={dummyTableData} columns={busDataColumns} />
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
// eslint-disable-next-line no-unused-vars
// export const getServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['user'],
//     queryFn: loadMyInfoAPI,
//   });

//   return {
//     props: {
//       // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//       items: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//     },
//   };
// };

export default MyPage;
