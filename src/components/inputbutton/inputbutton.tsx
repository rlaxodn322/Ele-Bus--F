import React from 'react';
import { Input, Button } from 'antd';

interface Input1Props {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  b?: string; // 'b' 속성을 선택적으로 받도록 변경
}

const Input1: React.FC<Input1Props> = ({ a, b }) => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>{a || b}</h1>
        <Input placeholder={b} style={{ width: '300px', marginBottom: '30px' }} />
        <Button>🔍</Button>
      </div>
    </>
  );
};

export default Input1;
