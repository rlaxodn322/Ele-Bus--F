import MainLayout from '../../../layouts/index';
import Top from '../../../components/admin/top';
import Middle from '../../../components/admin/middle';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <h1>운송사조회/관리</h1>
        <Top />
        <Middle />
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
