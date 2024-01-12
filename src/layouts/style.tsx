import styled from '@emotion/styled';

export const Layout = styled.section`
  margin: 0 auto;
  background-color: white;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  margin: 0 80px;
  min-height: 82.5dvh;

  background-color: white;

  @media (max-width: 1680px) {
    // width: 1200px;
  }

  @media (max-width: 1340px) {
    width: 100%;
    margin: 0 80px;
  }
`;
