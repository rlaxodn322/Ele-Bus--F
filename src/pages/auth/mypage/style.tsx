import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

export const PageProfile = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;

  div {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    margin-right: 5px;
  }
`;

export const ButtonWrapper = styled.div`
  padding-left: 40%;
  display: flex;
  justify-content: flex-end;
  margin: 0px;

  .button-gap {
    margin-right: 10px;
  }
`;
