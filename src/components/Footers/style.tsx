import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  margin-top: 100px;
  height: auto;
  background-color: #fcfcfc;
  color: #808080;
  display: flex; /* 가로로 가운데 정렬을 위해 flex 사용 */
  justify-content: center; /* 가로 가운데 정렬 */

  footer {
    padding-left: 50px;
    padding-bottom: 30px;
  }

  a {
    display: inline-block;
    margin: 40px 20px 10px 20px;
    color: #808080;
    font-size: 20px;
  }

  img {
    width: 100px;
    // margin-left: 30px;
  }

  p {
    display: inline-block;
    // margin-top: 0;
    // margin-bottom: 0;
  }

  span {
    display: block;
    margin-left: 20px;
    font-size: 13px;
  }
`;
