import MainLayout from '../../../../layouts/index';
import styled from '@emotion/styled';
import Head from 'next/head';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { Button } from 'antd';

const Page = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const TableWrapper = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const MyPage = () => {
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePrivacyChange = () => {
    setPrivacyAgreed(!privacyAgreed);
    setError('');
  };

  const handleTermsChange = () => {
    setTermsAgreed(!termsAgreed);
    setError('');
  };

  const handleSignup = () => {
    if (privacyAgreed && termsAgreed) {
      router.push('/auth/signup');
    } else {
      setError('개인정보 처리방침과 회원가입약관에 동의해야 회원가입을 진행할 수 있습니다.');
    }
  };

  return (
    <>
      <Head>
        <title>개인정보처리방침안내</title>
        <meta name="description" content="Service" />
      </Head>
      <Page>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Content>
          <h1>개인정보 처리방침 안내</h1>
          <label>
            <Checkbox type="checkbox" checked={privacyAgreed} onChange={handlePrivacyChange} />
            개인정보 처리방침에 동의합니다.
          </label>
          <TableWrapper>
            {' '}
            <Table>
              <thead>
                <tr>
                  <Th>목적</Th>
                  <Th>항목</Th>
                  <Th>보유기간</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>이용자 식별 및 본인여부 확인</Td>
                  <Td>아이디, 이름, 비밀번호</Td>
                  <Td>회원 탈퇴 시까지</Td>
                </tr>
                <tr>
                  <Td>고객서비스 이용에 관한 통지, CS 대응을 위한 이용자 식별</Td>
                  <Td>연락처(이메일, 휴대전화번호)</Td>
                  <Td>회원 탈퇴 시까지</Td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>
          <br />
          <Checkbox type="checkbox" checked={termsAgreed} onChange={handleTermsChange} />
          회원가입약관에 동의합니다.
          <br />
          <Button onClick={handleSignup}>회원가입</Button>
        </Content>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
