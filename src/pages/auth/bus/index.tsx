import MainLayout from '../../../layouts/index';

import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <h1>버스등록</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '10%', borderRight: '1px solid lightgray' }}>운행사명</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '10%', borderRight: '1px solid lightgray' }}>BUSID</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '10%', borderRight: '1px solid lightgray' }}>BUS번호</div>
        </div>
      </Page>
      <Page>
        <h1>운행사등록</h1>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
