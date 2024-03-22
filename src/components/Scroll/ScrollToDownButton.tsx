import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

interface Props {
  handleScrollToDown: () => void; // handleScrollToTop 함수의 타입을 명시적으로 지정
}

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ScrollToDownButton: React.FC<Props> = ({ handleScrollToDown }) => {
  return (
    <ButtonWrapper>
      <Button onClick={handleScrollToDown} icon={<DownOutlined />} size="large" />
    </ButtonWrapper>
  );
};

export default ScrollToDownButton;
// const handleScrollToDown = () => {
//     window.scrollTo({
//     top: document.body.scrollHeight,
//       // behavior: 'smooth',
//     });
//   };
