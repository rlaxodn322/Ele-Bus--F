import MainLayout from '../../../layouts/index';
import InputButton from '../../../components/inputbutton/inputbutton';
import Table7 from '../../../components/table/table7';
import Table3 from '../../../components/table/table3';
import DivBox from '../../../components/div/divbox';
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

const busDataColumns2 = ['등록일자', '담당이름', '부품'];
const dummyTableData = [
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },
  {
    user: 'itemID',
    registrationDate: '2023-1108/08:31',
    status: 'AREA',
    status1: 'A001',
    status2: '1시간30분',
    status3: '퍼스트씨앤디',
    status4: '전원',
  },

  // Add more dummy data as needed
];

const MyPage = () => {
  const [maintenanceHistory, setMaintenanceHistory] = useState([]);
  const [selectedPart, setSelectedPart] = useState(null); // 선택된 부품 정보를 저장하기 위한 상태
  const [searchedNumber, setSearchedNumber] = useState(''); // 검색한 부품번호를 저장하기 위한 상태

  const fetchPartInfo = async (partNumber: string) => {
    try {
      // 부품 번호에 해당하는 정보를 가져오는 API 함수를 가정
      const partInfo = await loadMyInfoAPI(partNumber);
      console.log(partNumber, partInfo); // 확인용으로 로그 출력
      setSelectedPart(partInfo ? [partInfo] : []); // 부품번호에 해당하는 정보가 있으면 배열로
      findSelectedPart(); // 부품 정보를 불러온 후에 선택된 부품을 찾음
    } catch (error) {
      console.error('부품 정보 불러오기 오류:', error);
    }
  };
  const handleInputButtonChange = async (value: string) => {
    console.log(value); // 확인용
    fetchPartInfo(value);
    setSearchedNumber(value);
  };
  const findSelectedPart = () => {
    // 검색한 부품번호를 이용하여 선택된 부품 찾기
    if (searchedNumber && maintenanceHistory.length > 0) {
      const foundPart = maintenanceHistory.find((part) => part.number === searchedNumber);
      setSelectedPart(foundPart || null);
    }
  };

  const fetchMyInfo = async () => {
    try {
      // 기존 로직을 사용하여 A/S 정보를 가져옴
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
      // 부품 정보 불러온 후에 선택된 부품을 찾음
      findSelectedPart();
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
    // 새로운 부품이 추가되었으므로 다시 데이터를 불러와서 상태를 업데이트합니다.
    fetchMyInfo();
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
            <InputButton a="부품 관리" name="부품 번호 검색" onChange={handleInputButtonChange} />
            {selectedPart && (
              <DivBox
                a={selectedPart.number}
                b={selectedPart.name}
                c={selectedPart.date}
                d={selectedPart.memo}
                e={selectedPart.status}
              />
            )}
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
            <div style={{ marginLeft: '10px', width: '100%' }}>
              <h1>부품 리스트</h1>
              <Table7 a="전체 담당자" data={dummyTableData} columns={busDataColumns} />
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
