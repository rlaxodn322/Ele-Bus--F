import MainLayout from '../../../../layouts/index';
import styled from '@emotion/styled';
import Head from 'next/head';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { Button } from 'antd';

const Page = styled.section`
  width: 100%;
  height: 850px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const Content = styled.div`
  max-width: 1000px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  text-align: center;
  overflow-y: auto; /* 스크롤 추가 */
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const TableWrapper = styled.div`
  margin-top: 50px;
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
const ContentBox = styled.div`
  max-width: 900px;
  height: 200px;
  overflow-y: auto;
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
        <h1 style={{ marginBottom: '30px' }}>퍼스트씨앤디 회원가입</h1>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Content>
          <h1>개인정보 처리방침 안내</h1>

          <ContentBox>
            <div>
              제1조 (목적)
              <br />본 약관은 퍼스트씨앤디(이하 "회사")가 제공하는 서비스를 이용함에 있어 회사와 회원 간의 권리, 의무 및
              책임사항을 규정하는 것을 목적으로 합니다. 본 약관은 회사가 제공하는 모든 서비스를 이용하는 회원에게
              적용됩니다.
            </div>
            <div>
              제2조 (용어의 정의)
              <br />
              "회사"라 함은 서비스를 제공하는 주체인 퍼스트씨앤디를 의미합니다. "회원"이라 함은 회사와 서비스 이용계약을
              체결한 개인 또는 단체를 의미합니다. "서비스"라 함은 회사가 제공하는 각종 인터넷 서비스를 의미합니다.
            </div>
            <div>
              제3조 (이용계약의 체결)
              <br />
              회원으로 가입하기 위해서는 회사가 제공하는 회원가입 양식에 필요한 정보를 정확히 기재하여 신청해야 합니다.
              회사는 회원가입 신청에 대해 승낙함으로써 이용계약이 체결됩니다.
            </div>
            <div>
              제4조 (개인정보의 보호)
              <br />
              회사는 회원의 개인정보를 본인의 동의 없이 타인에게 제공하지 않으며, 개인정보 처리방침에 따라 회원의
              개인정보를 보호합니다.
            </div>
            <div>
              제5조 (서비스의 제공)
              <br />
              회사는 회원에게 안정적이고 지속적인 서비스를 제공하기 위해 최선의 노력을 다하며, 서비스에 장애가 발생하는
              경우 즉시 이를 해결합니다. 회사는 서비스의 변경 및 중단에 대해 사전 고지를 할 수 있습니다.
            </div>
            <div>
              제6조 (회원의 의무)
              <br />
              회원은 회사가 제공하는 서비스를 이용할 때 다음 각 호의 행위를 해서는 안 됩니다. 가. 타인의 정보를
              도용하거나 허위 정보를 등록하는 행위 나. 서비스를 이용하여 범죄행위를 유도하거나 직접적으로 실행하는 행위
              다. 회사의 서비스 운영에 지장을 초래하는 행위 라. 회사의 지적재산권을 침해하는 행위
            </div>
          </ContentBox>
          <br />
          <label>
            <Checkbox type="checkbox" checked={privacyAgreed} onChange={handlePrivacyChange} />
            개인정보 처리방침에 동의합니다.
          </label>

          <TableWrapper>
            <h1>회원가입약관 안내</h1>
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
          <label>
            <Checkbox type="checkbox" checked={termsAgreed} onChange={handleTermsChange} />
            회원가입약관에 동의합니다.
          </label>
          <br />
          <Button style={{ marginTop: '30px' }} onClick={handleSignup}>
            회원가입
          </Button>
        </Content>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
