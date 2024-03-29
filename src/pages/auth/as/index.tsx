import MainLayout from '../../../layouts/index';
import InputButton from '../../../components/inputbutton/inputbutton';
import ASTable7 from '../../../components/table/astable7';
import Table3 from '../../../components/table/table3';
import DivBox from '../../../components/div/divbox';
import NewItem from '../../../components/input/newItem';
import styled from '@emotion/styled';
import Head from 'next/head';
import { loadMyInfoAPI } from '@/components/apis/item/item';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

interface MaintenanceHistoryItem {
  number: string;
  name: string;
  date: string;
  memo: string;
  status: string;
  registrationDate: string; // 적절한 속성 이름으로 업데이트합니다.
}
const Page = styled.section`
  width: 1370px;
  height: 100%;
  margin: 30px auto;
  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 70px;
    background-color: white;
  }
`;
const AsTable = styled.div`
  width: 100%;
  height: 40%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 1100px) {
    flex-direction: column;
    box-shadow: none;
  }
`;
const ItemSearch = styled.div`
  margin: 10px;
  width: 33%;
  height: 100%;
  @media (max-width: 1100px) {
    width: 95%;
    margin-bottom: 50px;
  }
`;
const ItemManager = styled.div`
  margin: 10px;
  width: 33%;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const ItemInput = styled.div`
  margin: 10px;
  width: 33%;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 1100px) {
    width: 95%;
    margin-top: 40px;
  }
`;
const ItemList = styled.div`
  width: 100%;
  height: 30%;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  @media (max-width: 1100px) {
    width: 95%;
    box-shadow: none;
    font-size: 11px;
  }
`;
const Title = styled.div`
  font-size: 20px;
  @media (max-width: 1100px) {
    font-size: 19px;
  }
`;
const busDataColumns = ['부품번호', '날짜', '부품위치', '창고위치', '요청시간', '담당자', '부품'];

const busDataColumns2 = ['등록일자', '담당이름', '부품'];

const MyPage = () => {
  const [maintenanceHistory, setMaintenanceHistory] = useState<MaintenanceHistoryItem[]>([]);
  const [selectedPart, setSelectedPart] = useState<MaintenanceHistoryItem | null>(null);
  const [searchedNumber, setSearchedNumber] = useState(''); // 검색한 부품번호를 저장하기 위한 상태
  const router = useRouter();

  const isAuthenticated = typeof window !== 'undefined' && Boolean(sessionStorage.getItem('userData'));
  const userDataString = typeof window !== 'undefined' ? sessionStorage.getItem('userData') : null;
  const userData = userDataString ? JSON.parse(userDataString) : {};
  // const adminValue = userData.admin;
  // console.log(adminValue);

  // 로그인되어 있지 않거나 어드민 값이 '02'가 아니면 로그인 페이지로 리디렉션합니다.
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
    if (userData.admin !== null && userData.admin === '02') {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, userData]);

  const handleInputButtonChange = async (value: string) => {
    setSearchedNumber(value);
  };

  useEffect(() => {
    if (searchedNumber && maintenanceHistory.length > 0) {
      const foundPart = maintenanceHistory.find((part) => part.number === searchedNumber);
      setSelectedPart(foundPart || null);
    }
  }, [searchedNumber, maintenanceHistory]);

  const findSelectedPart = () => {
    // 검색한 부품번호를 이용하여 선택된 부품 찾기
    if (searchedNumber && maintenanceHistory.length > 0) {
      const foundPart = maintenanceHistory.find((part) => part.number === searchedNumber);
      setSelectedPart(foundPart || null);
      console.log(selectedPart);
    }
  };
  const fetchMyInfo = async () => {
    try {
      // 기존 로직을 사용하여 A/S 정보를 가져옴
      const myInfoData = await loadMyInfoAPI();
      const maintenanceHistoryData: MaintenanceHistoryItem[] = myInfoData.map(
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h1>A/S서비스 부품관리</h1>
        <AsTable>
          <ItemSearch>
            <Table3 data={maintenanceHistory} columns={busDataColumns2} />
          </ItemSearch>
          <ItemManager>
            <InputButton a="부품 관리" name="부품 번호 검색" onChange={handleInputButtonChange} />
            {selectedPart !== null ? (
              <DivBox
                a={selectedPart.number}
                b={selectedPart.name}
                c={selectedPart.date}
                d={selectedPart.memo}
                e={selectedPart.status}
                number={searchedNumber}
              />
            ) : (
              <EmptyDivBox />
            )}
          </ItemManager>
          <ItemInput>
            <NewItem
              onReloadData={fetchMyInfo}
              title="신규 부품 입력"
              onSubmit={handleInput5Submit} // handleInput5Submit 함수는 신규 부품 입력이 완료되었을 때 호출되어야 하는 함수입니다.
              onCancel={handleInput5Cancel} // handleInput5Cancel 함수는 취소 버튼이 클릭되었을 때 호출되어야 하는 함수입니다.
              placeholders={[]}
            />
          </ItemInput>
        </AsTable>
        <ItemList>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '10px', width: '100%' }}>
              <Title>
                <h4>부품 리스트</h4>
              </Title>

              <ASTable7 data={maintenanceHistory} columns={busDataColumns} />
            </div>
          </div>
        </ItemList>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
const EmptyDivBox = () => (
  <div>
    <div style={{ color: 'gray' }}>
      <div
        style={{
          width: '80%',
          height: '30px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        부품번호:
      </div>
      <div
        style={{
          width: '80%',
          height: '30px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        담당 이름:
      </div>
      <div
        style={{
          width: '80%',
          height: '30px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        등록일자:
      </div>
      <div
        style={{
          width: '80%',
          height: '30px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        부품이름:
      </div>
      <div
        style={{
          width: '80%',
          height: '30px',
          border: '1px solid lightgray',
          borderRadius: '5px',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        기타사항:
      </div>
    </div>
  </div>
);
