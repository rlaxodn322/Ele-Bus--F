import styled from '@emotion/styled';
import { Form } from 'antd';

export const Label = styled.label`
  user-select: none; // 클릭x
  color: #483f3f;
`;

export const InputBox = styled.div`
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;

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
`;

export const PageLogin = styled(Form)`
  height: 60vh; /* 배경색상 크기설정 */
  width: 60%;
  padding-left: 40%;
  line-height: 1.3;
`;

export const LoginTitle = styled.div`
  margin: 20px;
`;

export const LoginBar = styled.div`
  margin-top: 0%;
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  padding: 6px;
  margin: 10px;
  background-color: white;
  color: #808080;

  &:focus-within {
    box-shadow: 0 0 0 2px #4285f4;
    color: #808080;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  border-radius: 24px;
  padding: 8px;
  font-size: 14px;
  background-color: white;
  color: #808080;

  &:focus {
    outline: none;
    color: #808080;
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

  & Button {
    color: #808080;
    danger-color: #808080;
  }
`;
