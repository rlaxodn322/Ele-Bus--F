import MainLayout from '../../../layouts/index';
import Top from '../../../components/bus/top';

import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <Top />
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
