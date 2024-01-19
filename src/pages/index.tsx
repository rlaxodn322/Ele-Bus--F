import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
import Map from '../components/apis/kakao/map';
import Top from '../components/dashboard/top';
import Middle from '../components/dashboard/middle';
import Bottom from '../components/dashboard/bottom';
const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      <Page>
        <div
          style={{
            width: '60%',
            backgroundColor: 'white',
          }}
        >
          <div style={{ height: '70%', boxShadow: '2px 2px 2px 2px' }}>
            <Map />
          </div>
          <div
            style={{ marginTop: '10px', height: '30%', boxShadow: '2px 2px 2px 2px', backgroundColor: 'white' }}
          ></div>
        </div>
        <div style={{ marginLeft: '10px', width: '40%' }}>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              height: '20%',
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                width: '48%',
                height: '100%',

                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 2px 2px',
              }}
            ></div>
            <div
              style={{
                width: '48%',
                height: '100%',

                borderRadius: '20px',
                backgroundColor: 'white',
                boxShadow: '2px 2px 2px 2px',
              }}
            ></div>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              height: '20%',
              marginTop: '10px',
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                width: '48%',
                height: '100%',
                boxShadow: '2px 2px 2px 2px',

                borderRadius: '20px',
                backgroundColor: 'white',
              }}
            ></div>
            <div
              style={{
                width: '48%',
                height: '100%',
                boxShadow: '2px 2px 2px 2px',

                borderRadius: '20px',
                backgroundColor: 'white',
              }}
            ></div>
          </div>
          <div
            style={{
              width: '100%',
              height: '58%',
              marginTop: '10px',

              boxShadow: '2px 2px 2px 2px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
