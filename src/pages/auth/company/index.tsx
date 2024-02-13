import MainLayout from '../../../layouts/index';
import Top from '../../../components/company/top';
import Table7 from '../../../components/table/table7';
import Table5 from '../../../components/table/table5';
import { Button, Modal, Form, Input } from 'antd'; // Modal과 Form을 추가로 import
import { useState } from 'react';
// import { Page } from './style';
import styled from '@emotion/styled';
import Head from 'next/head';

const { Item } = Form;
const Page = styled.section`
  // display: inline-flex;

  /* /* display: flex; */
  /* justify-content: space-between; */
  width: 1370px;
  height: 100vh;
  margin: 30px auto;
`;

const MyPage = () => {
  const [modalOpen, setModalOpen] = useState(false); // visible 상태 대신 open 상태로 변경
  const [form] = Form.useForm();
  // Modal 열기 함수
  const showModal = () => {
    setModalOpen(true);
  };

  // Modal 닫기 함수
  const handleCancel = () => {
    setModalOpen(false);
    form.resetFields(); // 입력값 초기화
  };
  // 자동차 정보 등록 처리 함수
  const handleCarRegistration = (values: any) => {
    // TODO: 입력된 자동차 정보를 처리하는 로직을 작성합니다.
    console.log('등록된 자동차 정보:', values);
    // 등록 후 Modal 닫기
    setModalOpen(false);
    form.resetFields(); // 입력값 초기화
  };
  const busDataColumns = ['버스ID', '등록일', '차량번호', '차량등록', '차대번호', '통신모듈', '모델번호'];
  const busDataColumns1 = ['충전ID', '등록일', '충전용량', '누적충전', '모델'];

  const dummyTableData = [
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
    },
    {
      user: 'busID',
      registrationDate: '2023-1108/08:30',
      status: '경기11바1234',
      status1: '2024-01-01',
      status2: '1123456-122',
      status3: 'RSVP123',
      status4: 'AAA123',
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
      <Head>
        <title>사업자조회/관리 페이지</title>
        <meta name="description" content="company" />
      </Head>
      <Page>
        <h1>사업자조회/관리</h1>
        <Top />
        <div
          style={{
            width: '100%',
            height: '35%',
            marginTop: '10px',
            padding: '10px',
            background: 'white',
            borderRadius: '10px',
            boxShadow: '1px 1px 2px 2px lightgray',
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
                  <Button style={{ marginRight: '5px' }}>엑셀다운로드</Button>
                </div>
              </div>

              <Table7 a="전체 통신모듈" data={dummyTableData} columns={busDataColumns} />
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
      <Modal title="버스 등록" open={modalOpen} onCancel={handleCancel} footer={null}>
        {/* 등록 폼 */}
        <Form form={form} onFinish={handleCarRegistration}>
          <Item label="차량번호" name="carNumber" rules={[{ required: true, message: '차량번호를 입력해주세요.' }]}>
            <Input />
          </Item>
          <Item label="노선번호" name="Number" rules={[{ required: true, message: '노선번호를 입력해주세요.' }]}>
            <Input />
          </Item>
          <Button type="primary" htmlType="submit">
            등록
          </Button>
        </Form>
      </Modal>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
