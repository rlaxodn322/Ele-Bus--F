import styled from '@emotion/styled';
export const LogoutWrapper = styled.div`
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

export const Layout = styled.div`
  position: fixed;
  left: 0;
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

  @media (min-width: 1100px) {
    // 화면 크기가 769px 이상일 때의 스타일

    &:hover {
      width: 240px;

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
  }
  @media (max-width: 1100px) {
    // 화면 크기가 768px 이하일 때의 스타일
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #f0f0f0;
    border-right: none;

    top: 0; // 상단으로 이동

    &:hover {
      width: 100%;
      & div {
        margin: 10;
      }
    }

    & ${LogoutWrapper} {
      top: 20px;
      right: 20px;
      bottom: unset;
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
  @media (max-width: 1100px) {
    margin: -55px 10px 50px 0px;
    font-family: Noto Sans KR;
    font-size: 16px;
    line-height: 100%;
    list-style: none;
    display: flex; /* 가로로 나열되도록 설정 */
    background-color: white;
    justify-content: space-between;
    & li {
      color: #808080;

      & label {
        cursor: pointer;
        font-style: normal;
        font-weight: 100;
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
  }
`;

export const MenuDetailWrapper = styled.div`
  margin: 25px;
`;

export const IconImage = styled.img`
  float: left;
`;
