import React from 'react';
import { Button } from 'antd';
interface ButtonProps {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  b?: string; // 'b' 속성을 선택적으로 받도록 변경
  c?: string; // 'b' 속성을 선택적으로 받도록 변경
}
const Button3: React.FC<ButtonProps> = ({ a, b, c }) => {
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
        <Button>{b}</Button>
        <Button>{c}</Button>
      </div>
    </>
  );
};

export default Button3;
