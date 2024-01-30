import MainLayout from '../../../layouts/index';
import Top from '../../../components/bus/top';
import TopMiddle from '../../../components/bus/topmiddle';
import Middle from '../../../components/bus/middle';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <Top />
        <TopMiddle />
        <Middle />
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
