import MainLayout from '../../../layouts/index';
// import { Page } from './style';
// import { Button, Input } from 'antd';
import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import Head from 'next/head';

const Page = styled.section`
  // display: inline-flex;

  /* display: flex;
  justify-content: space-between; */
  width: 350px;
  height: 100vh;
  margin: 0 auto;

  /* justify-content: center; */
`;
const BookContainer = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  width: 95%;
  height: 320px;
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px lightgray;
  margin-bottom: 20px;
`;
const BookTitle = styled.div`
  color: gray;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
`;
const BooknameContainer = styled.div`
  display: 'flex';
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const TextAreaContainer = styled.div`
  display: 'flex';
  margin: '0 auto';
  text-align: center;
`;
const TextArea = styled.textarea`
  width: 95%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const TextContainer = styled.div`
  width: 95%;
  height: 300px;
  /* border: 1px solid lightgray; */
  border-radius: 20px;
  margin: 0 auto;
`;
const TextName = styled.div`
  height: 15%;
  margin: 20px;
  background-color: white;
`;
const TextInfo = styled.div`
  margin: 20px;
  height: 100px;
  border: 1px solid lightgray;
  background-color: lightgray;
`;
const MyPage = () => {
  return (
    <>
      <Head>
        <title>방명록 관리 페이지</title>
        <meta name="description" content="Service" />
      </Head>
      <Page>
        <BookContainer>
          <BookTitle>방명록</BookTitle>
          <BooknameContainer>
            <Input style={{ width: '95%' }} placeholder="이름을 입력해주세요." />
          </BooknameContainer>
          <TextAreaContainer>
            <TextArea placeholder="축하의 메세지를 전달하세요." required />
            <Button style={{ color: 'gray' }}>등록</Button>
          </TextAreaContainer>
        </BookContainer>
        <TextContainer>
          <TextName>이름 :</TextName>
          <TextInfo>내용 :</TextInfo>
        </TextContainer>
        {/* <div style={{ display: 'flex', alignItems: 'center', width: '90%', marginBottom: '30px' }}>
          <div style={{ width: '30%', marginTop: '15px', marginRight: '20px', fontSize: '18px', fontWeight: '600' }}>
            연락하기
          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
            <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
            <img src="/images/bus-svgrepo-com (7).svg" alt="" />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '90%' }}>
          <div style={{ width: '30%', marginTop: '15px', marginRight: '20px', fontSize: '18px', fontWeight: '600' }}>
            연락하기
          </div>
          <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
            <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
            <img src="/images/bus-svgrepo-com (7).svg" alt="" />
          </div>
        </div>
        <div
          style={{
            marginTop: '30px',
            paddingTop: '10px',
            height: '50px',
            width: '100%',
            background: '#afeeee',
            textAlign: 'center',
            color: 'white',
            fontSize: '18px',
            fontWeight: '700',
          }}
        >
          혼주에게 연락하기
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '50%', textAlign: 'center' }}>
            <div>신랑 측 혼주</div>
            <div>아버지 김성호</div>
            <div>
              <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
                <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
                <img src="/images/bus-svgrepo-com (7).svg" alt="" />
              </div>
            </div>
            <div>어머니 김종숙</div>
            <div>
              <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
                <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
                <img src="/images/bus-svgrepo-com (7).svg" alt="" />
              </div>
            </div>
          </div>
          <div style={{ width: '50%', textAlign: 'center' }}>
            <div>신랑 측 혼주</div>
            <div>아버지 김성호</div>
            <div>
              <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
              <img src="/images/bus-svgrepo-com (7).svg" alt="" />
            </div>
            <div>어머니 김종숙</div>
            <div>
              <img src="/images/bus-bus-svgrepo-com.svg" alt="" />
              <img src="/images/bus-svgrepo-com (7).svg" alt="" />
            </div>
          </div>
        </div> */}
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
