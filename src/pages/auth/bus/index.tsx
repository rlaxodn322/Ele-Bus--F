import MainLayout from '../../../layouts/index';
import Top from '../../../components/home/top';
import TopMiddle from '../../../components/home/topmiddle';
import Middle from '../../../components/home/middle';
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
