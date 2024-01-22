import MainLayout from '../../../layouts/index';
import Right from '../../../components/home/right';
import Map from '../../../components/apis/kakao/map';
import Table from '../../../components/dashboard/Table';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <div style={{ display: 'flex', height: '750px' }}>
          <div style={{ width: '100%', height: '100%', marginRight: '10px' }}>
            <Map />
          </div>
          <div style={{ width: '100%', height: '100%', marginRight: '10px' }}>
            <Right />
            <div style={{ marginTop: '10px', width: '100%', height: '550px' }}>
              <div
                style={{ width: '100%', height: '50%', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}
              >
                <Table />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '50%',
                  boxShadow: '2px 2px 2px 2px lightgray',
                  marginTop: '10px',
                  borderRadius: '10px',
                }}
              >
                <Table />
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
