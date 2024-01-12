import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';
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
