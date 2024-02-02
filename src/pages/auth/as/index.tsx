import MainLayout from '../../../layouts/index';
import { Page } from './style';
import InputButton from '../../../components/inputbutton/inputbutton';
import Card from '../../../components/card/card7';
import Card4 from '../../../components/card/card4';
import Card3 from '../../../components/card/card3';
import DivBox from '../../../components/div/divbox';
import Button3 from '../../../components/button/button3';
import Button2 from '../../../components/button/button2';
import Input5 from '../../../components/input/Input5';

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
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
  },
  {
    user: '2023-11-08/08:30',
    registrationDate: 'AREA',
    status: '비활성화',
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
            <InputButton b="부품 검색" /> {/* 'a' 속성을 전달 */}
            <Card3 data={dummyTableData2} columns={busDataColumns2} />
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
              <h1>부품 리스트</h1>
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
