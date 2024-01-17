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
        <div style={{ width: '650px', border: '1px solid black' }}></div>
        <div style={{ width: '650px', border: '1px solid black' }}></div>
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
