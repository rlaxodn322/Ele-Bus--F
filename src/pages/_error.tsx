import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

interface ErrorProps {
  statusCode: number;
}

function Error({ statusCode }: ErrorProps) {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
}

interface ExtendedGetServerSidePropsContext extends GetServerSidePropsContext {
  err?: { statusCode?: number };
}

export const getServerSideProps = async ({
  res,
  err,
}: ExtendedGetServerSidePropsContext): Promise<GetServerSidePropsResult<ErrorProps>> => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode: statusCode ?? 404 } }; // 타입 단언을 사용하여 statusCode가 undefined일 때 기본값을 설정합니다.
};

export default Error;
// function Error({ statusCode }) {
//   return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
// }

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

// export default Error;
