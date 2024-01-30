import MainLayout from '../../../layouts/index';
import Top from '../../../components/admin/top';
import Middle from '../../../components/admin/middle';
import { Page } from './style';
const MyPage = () => {
  return (
    <>
      <Page>
        <Top />
        <Middle />
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
