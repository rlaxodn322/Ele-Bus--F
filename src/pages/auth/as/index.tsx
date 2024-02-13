import MainLayout from '../../../layouts/index';
// import { Page } from './style';
import InputButton from '../../../components/inputbutton/inputbutton';
import Table7 from '../../../components/table/table7';
import Table4 from '../../../components/table/talbe4';
import Table3 from '../../../components/table/table3';
import DivBox from '../../../components/div/divbox';
import Button3 from '../../../components/button/button3';
import Button2 from '../../../components/button/button2';
import Input5 from '../../../components/input/Input5';
import styled from '@emotion/styled';
import Head from 'next/head';
// import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
// import { useRouter } from 'next/router';
// import { loadMyInfoAPI } from '@/components/apis/user/user';
// import { useEffect } from 'react';
// import { loadMyInfoAPI } from '@/components/apis/user/user';
// import User from '@/interfaces/user';

const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 30px auto;
`;

const busDataColumns = ['부품번호', '날짜', '부품위치', '창고위치', '요청시간', '담당자', '부품'];
const busDataColumns1 = ['날짜', '위치', '버스ID', '고장'];
const busDataColumns2 = ['등록일자', '사용자', '상태'];
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
const dummyTableData2 = [
  {
    user: 'Area',
    registrationDate: '2023-1108/08:31',
    status: '활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:32',
    status: '활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:33',
    status: '활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:31',
    status: '비활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:35',
    status: '비활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:37',
    status: '비활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:38',
    status: '비활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:39',
    status: '비활성화',
  },
  {
    user: 'Area',
    registrationDate: '2023-1108/08:31',
    status: '비활성화',
  },
];

const MyPage = () => {
  // const router = useRouter();

  // // eslint-disable-next-line no-undef
  // const { isLoading, data: me } = useQuery<User>(['user'], loadMyInfoAPI);

  // useEffect(() => {
  //   if (!isLoading && !me?.email) {
  //     router.push('/auth/login');
  //   }
  // }, [isLoading, router, me]);
  return (
    <>
      <Head>
        <title>A/S페이지</title>
        <meta name="description" content="as" />
      </Head>
      <Page>
        <div
          style={{
            width: '100%',
            height: '50%',
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
            <InputButton b="부품 검색" /> {/* 'a' 속성을 전달 */}
            <Table3 data={dummyTableData2} columns={busDataColumns2} />
          </div>

          <div style={{ margin: '10px', width: '33%', height: '100%', borderRadius: '10px' }}>
            <InputButton a="부품 관리" b="부품 검색" />
            <DivBox a="부품번호" b="담당자 이름" c="등록일자" d="기타사항" e="상태" />
            <Button3 a="편집" b="삭제" c="취소" />
          </div>
          <div style={{ margin: '10px', width: '33%', height: '100%', borderRadius: '10px' }}>
            <Input5 a="신규 부품 입력" b="부품 번호" c="담당자 이름" d="등록일자" e="기타 사항" f="상태" />

            <Button2 a="등록" b="취소" />
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
