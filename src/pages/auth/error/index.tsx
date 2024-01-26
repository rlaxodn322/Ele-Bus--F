import MainLayout from '../../../layouts/index';
import Card from '../../../components/antd/layout';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <div style={{ display: 'flex', justifyContent: 'space-between', background: 'white' }}>
          <div style={{ width: '20%', height: '750px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
            <h1 style={{ margin: '20px' }}>수원여객 차량</h1>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '10px',
                borderBottom: '1px solid lightgray',
              }}
            >
              <h1>버스ID</h1>
              <h1>차량번호</h1>
              <h1>SOC</h1>
            </div>
          </div>
          <div style={{ width: '39%', height: '750px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
            <h1 style={{ margin: '20px' }}>123호 1234 상태정보</h1>
            <Card />
          </div>
          <div style={{ width: '39%', height: '750px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
            <h1 style={{ margin: '20px' }}>DTG정보</h1>
          </div>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
