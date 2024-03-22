import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

interface Props {
  handleScrollToTop: () => void; // handleScrollToTop 함수의 타입을 명시적으로 지정
}

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  right: 20px;
  z-index: 1000;
`;

const ScrollToTopButton: React.FC<Props> = ({ handleScrollToTop }) => {
  return (
    <ButtonWrapper>
      <Button onClick={handleScrollToTop} icon={<UpOutlined />} size="large" />
    </ButtonWrapper>
  );
};

export default ScrollToTopButton;
