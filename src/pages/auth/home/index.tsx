import MainLayout from '../../../layouts/index';

import Map from '../../../components/apis/kakao/map';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <div style={{ display: 'flex', height: '750px' }}>
          <div style={{ width: '50%', height: '100%', marginRight: '10px' }}>
            <Map />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '50%',
              height: '100px',
            }}
          >
            <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray' }}></div>
            <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray' }}></div>
            <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray' }}></div>
            <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray' }}></div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
