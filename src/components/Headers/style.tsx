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
  padding-left: 80px;
  background-color: white;

  & img {
    height: 50px;
    // margin: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  // background-color: white;
  margin: 10px;

  & Button {
    margin-right: 10px;
    width: 100px;
    // height: 30px;
    color: #808080;
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
