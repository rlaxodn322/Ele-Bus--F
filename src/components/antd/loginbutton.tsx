// LoginButton.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Modal } from 'antd';
import EmailForm from '../apis/mail';
interface LoginButtonProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ isLoggedIn, handleLogout }) => {
  // 모달 열고 닫는 상태 및 함수 정의
  const [modalVisible, setModalVisible] = useState(false);

  // 모달 열기 함수
  const showModal = () => {
    setModalVisible(true);
  };

  // 모달 닫기 함수
  const handleCancel = () => {
    setModalVisible(false);
  };
  // 이메일 전송 성공 시 모달 닫기
  const handleEmailSent = () => {
    setModalVisible(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Link href="/auth/mypage">
            <Button>마이페이지</Button>
          </Link>
          <Button onClick={handleLogout}>로그아웃</Button>
          <Button onClick={showModal}>권한상향</Button>
        </>
      ) : (
        <>
          <Link href="/auth/login">
            <Button>로그인</Button>
          </Link>
          {/* <Link href="/auth/signup">
            <Button>회원가입</Button>
          </Link> */}
        </>
      )}
      <Modal title="권한 상향" open={modalVisible} onCancel={handleCancel} footer={null} onOk={handleCancel}>
        {/* EmailForm 컴포넌트를 모달 안에 렌더링 */}
        <EmailForm onSuccess={handleEmailSent} placeholder="회사명, 권한상향 이유를 입력해주세요." />
      </Modal>
    </>
  );
};

export default LoginButton;
