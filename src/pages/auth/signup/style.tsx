import styled from '@emotion/styled';

export const CheckError = styled.button`
  font-size: 10px;
  color: red;
  border: none;
  background-color: transparent;
  margin-left: 4px;
  /* tabindex= -1; */

  &:focus {
    outline: none;
  }
`;

export const TitleWrapper = styled.div`
  padding: 20px; /* 텍스트 박스와 영역 사이의 여백 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBox = styled.div`
  color: #ffffff; /* 원하는 텍스트 색상으로 변경 */
  font-size: 2rem; /* 원하는 텍스트 크기로 변경 */
  text-align: left;
  user-select: none;
  background-color: white;
`;

export const PageSignUp = styled.div`
  //margin-top: 0%;
  width: 60%;
  height: 60vh;
  padding-left: 40%;
  background-color: white;
`;

export const SignUpBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 6px;
  margin: 10px;

  &:focus-within {
    box-shadow: 0 0 0 2px #4285f4;
  }
`;

export const SignUpInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 24px;
  padding: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 40%;
`;
