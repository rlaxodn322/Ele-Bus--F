import MainLayout from '../../../layouts/index';

import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <div style={{ width: '100%', height: '25%' }}>
          <h1>통계정보</h1>
          <h1>버스</h1>
          <h1>기간</h1>
        </div>
        <div
          style={{ border: '1px solid lightgray', margin: '0 auto', width: '80%', height: '65%', borderRadius: '10px' }}
        >
          <div style={{ borderBottom: '1px solid lightgray', height: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
              <h1>날짜</h1>
              <h1>차량</h1>
              <h1>에러위치</h1>
              <h1>에러내용</h1>
              <h1>비고</h1>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
