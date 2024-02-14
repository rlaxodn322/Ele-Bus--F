import styled from '@emotion/styled';

export const Layout = styled.div`
  position: fixed;
  left: 0;
  width: 250px;
  bottom: 0;
  height: 100vh;
  width: 100px;
  z-index: 3;
  border-right: 1px solid #f0f0f0;
  background-color: white;
  border-radius: 5px;
  & div {
    height: 30px;
    padding-top: 40px;
    & li {
      height: 25px;
      width: 60px;
      padding-top: 14px;
      & a {
        & label {
          visibility: hidden;
        }
        & img {
          margin-left: -5px;
          margin-top: -4px;
        }
      }
    }
  }
  &:hover {
    width: 250px;
    & div {
      text-align: right;
      margin: 20px;
      & img {
      }
      visibility: visible;
      & li {
        text-align: left;
        width: 190px;
        & a {
          & label {
            visibility: visible;
          }
          & img {
            margin-left: 0px;
          }
        }
      }
    }
  }
`;

export const Menu = styled.div``;

export const MenuIconWrapper = styled.div`
  text-align: left;
  margin: 20px 10px;
  & img {
    cursor: pointer;
  }
`;

export const MenuWrapper = styled.ul`
  margin: 30px 20px 0 0px;
  font-family: Noto Sans KR;
  font-size: 16px;
  line-height: 100%;
  list-style: none;

  & li {
    color: #808080;
    margin-bottom: 30px;

    & label {
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;

      margin: 10px 0px 0px 15px;
      color: #808080;
    }

    & span {
      cursor: pointer;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;

      color: #808080;
    }

    & img {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }
`;

export const MenuDetailWrapper = styled.div`
  margin: 25px;
`;

export const IconImage = styled.img`
  float: left;
`;

export const LogoutWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  height: 50px;
  width: 70%;
  & img {
    margin-right: 10px;
    float: left;
  }

  & span {
    color: #808080;
    font-family: Noto Sans KR;
    font-size: 16px;
    float: left;
    margin-top: 12px;
  }
`;
