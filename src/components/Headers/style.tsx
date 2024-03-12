import styled from '@emotion/styled';

export const Layout = styled.div`
  // display: inline-flex;
  // width: auto;
  // height: auto;
  // background-color: #d3d3d3;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  background-color: white;
  z-index: 5;

  & img {
    height: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;

  & Button {
    margin-right: 10px;
    width: 100px;
    color: #808080;
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
    & Button {
      margin-right: 0;
    }
  }
`;

export const Button = styled.div`
  // border: 1px solid #dfe1e5;
  // margin-right: 10px;
  // text-align: center;
  // width: 90px;
  // height: 20px;
  // cursor: pointer;
`;
