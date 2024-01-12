import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
// import App from '../components/antd/timeline';
// import App from '../components/antd/card';
// import FormDisabledDemo from '../components/antd/signup';
// import MapComponent from '../components/apis/kakao/map';
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
      {/* <MapComponent></MapComponent>
      <App></App> */}
      {/* <FormDisabledDemo></FormDisabledDemo> */}

      <Page>
        <Top />
      </Page>
      <Page>
        <Middle />
      </Page>
      <Page>
        <Bottom />
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
