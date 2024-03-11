import React from 'react';
import { Button } from 'antd';

interface ButtonProps {
  a?: string;
  b?: string;
  c?: string;
  onClick?: () => void; // 'onClick' prop 추가
}

const Button3: React.FC<ButtonProps> = ({ a, b, c, onClick }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          width: '60%',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        <Button>{a}</Button>
        <Button onClick={onClick}>{b}</Button>
        <Button>{c}</Button>
      </div>
    </>
  );
};

export default Button3;
