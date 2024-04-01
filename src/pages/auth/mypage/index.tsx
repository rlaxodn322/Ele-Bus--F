import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, message, Modal } from 'antd';
import MainLayout from '../../../layouts';
// import { PageProfile, ProfileTitle, ProfileInfo, ButtonWrapper } from './style';
import { deleteUserAPI } from '../../../components/apis/user/user';
import EditModal from '../../../components/modal/EditModal';
import styled from '@emotion/styled';

// const TitleWrapper = styled.div`
//   margin-bottom: 20px;
// `;

const PageProfile = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  div {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    margin-right: 5px;
  }
`;

const ButtonWrapper = styled.div`
  padding-left: 20%;
  display: flex;
  justify-content: center;
  margin: 0px;

  .button-gap {
    margin-right: 10px;
  }
`;

const MyPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [createdAt, setCreate] = useState('');
  const [updatedAt, setUpdate] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
      setCompany(userData.company);
      setCreate(userData.createdAt);
      setUpdate(userData.updatedAt);
      // console.log(userData);
    }
  }, [setName]);

  const handleEdit = () => {
    setEditModalOpen(true);
  };
  const handleDelete = () => {
    Modal.confirm({
      title: '회원 탈퇴',
      content: '정말로 회원을 탈퇴하시겠습니까?',
      onOk: () => {
        deleteUserAPI(email)
          .then(() => {
            message.success('회원 탈퇴가 완료되었습니다.');
            router.push('/auth/login'); // 페이지 이동
          })

          .catch((error) => {
            message.error('회원 탈퇴 중 오류가 발생했습니다.');
            console.error(error);
          });
      },
      onCancel: () => {
        // 사용자가 취소한 경우 실행할 로직
      },
    });
  };
  // const handleDelete = () => {
  //   const confirmDelete = window.confirm('정말로 회원을 탈퇴하시겠습니까?');
  //   if (confirmDelete) {
  //     deleteUserAPI(email)
  //       .then(() => {
  //         message.success('회원 탈퇴가 완료되었습니다.');
  //         router.push('../auth/login'); // 회원 탈퇴 후 홈페이지로 이동
  //       })
  //       .catch((error) => {
  //         message.error('회원 탈퇴 중 오류가 발생했습니다.');
  //         console.error(error);
  //       });
  //   }
  // };

  const handleEditModalCancel = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="마이페이지" />
      </Head>
      <PageProfile>
        <ProfileTitle>마이페이지</ProfileTitle>
        <ProfileInfo>
          <div>
            <strong>이름:</strong> {name}
          </div>
          <div>
            <strong>연락처:</strong> {phone}
          </div>
          <div>
            <strong>회사명:</strong> {company}
          </div>
          <div>
            <strong>이메일:</strong> {email}
          </div>
          <div>
            <strong>생성일:</strong> {createdAt}
          </div>
          <div>
            <strong>업데이트일:</strong> {updatedAt}
          </div>
          <ButtonWrapper>
            <Button key="" type="primary" onClick={handleEdit}>
              정보수정
            </Button>
            <span className="button-gap" />
            <Button key="primary" onClick={handleDelete}>
              회원탈퇴
            </Button>
          </ButtonWrapper>
        </ProfileInfo>
      </PageProfile>

      <EditModal open={editModalOpen} onCancel={handleEditModalCancel} user={{ name, email, phone, company }} />
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
