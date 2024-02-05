import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, message } from 'antd';
import MainLayout from '../../../layouts';
import { PageProfile, ProfileTitle, ProfileInfo, ButtonWrapper } from './style';
import { deleteUserAPI } from '../../../components/apis/user/user';
// import EditModal from '../../../components/Modals/auth';

const MyPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createdAt, setCreate] = useState('');
  const [updatedAt, setUpdate] = useState('');
  // const [editModalVisible, setEditModalVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');
    if (userDataString !== null) {
      const userData = JSON.parse(userDataString);
      setName(userData.name);
      setEmail(userData.email);
      setCreate(userData.createdAt);
      setUpdate(userData.updatedAt);
      console.log(userData);
    }
  }, []);

  // const handleEdit = () => {
  //   setEditModalVisible(true);
  // };

  const handleDelete = () => {
    const confirmDelete = window.confirm('정말로 회원을 탈퇴하시겠습니까?');
    if (confirmDelete) {
      deleteUserAPI(email)
        .then(() => {
          message.success('회원 탈퇴가 완료되었습니다.');
          router.push('../auth/login'); // 회원 탈퇴 후 홈페이지로 이동
        })
        .catch((error) => {
          message.error('회원 탈퇴 중 오류가 발생했습니다.');
          console.error(error);
        });
    }
  };

  // const handleEditModalCancel = () => {
  //   setEditModalVisible(false);
  // };

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
            <strong>이메일:</strong> {email}
          </div>
          <div>
            <strong>생성일:</strong> {createdAt}
          </div>
          <div>
            <strong>업데이트일:</strong> {updatedAt}
          </div>
          <ButtonWrapper>
            {/* <Button key="" type="primary" onClick={handleEdit}>
              정보수정
            </Button> */}
            <span className="button-gap" />
            <Button key="" onClick={handleDelete}>
              회원탈퇴
            </Button>
          </ButtonWrapper>
        </ProfileInfo>
      </PageProfile>
      {/* <EditModal visible={editModalVisible} onCancel={handleEditModalCancel} user={{ name, email }} /> */}
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
