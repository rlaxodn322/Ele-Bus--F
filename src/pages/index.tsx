import Head from 'next/head';
import MainLayout from '../layouts';
import { Page } from './style';

import Grid from '../components/dashboard/grid';
const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <meta name="description" content="text." />
      </Head>
      <Page>
        <Grid />
      </Page>
    </>
  );
};

Home.layout = MainLayout;

export default Home;
