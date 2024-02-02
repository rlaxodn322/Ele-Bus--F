import React from 'react';
import { Input } from 'antd';
interface InputProps {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  b?: string; // 'b' 속성을 선택적으로 받도록 변경
  c?: string; // 'b' 속성을 선택적으로 받도록 변경
  d?: string; // 'b' 속성을 선택적으로 받도록 변경
  e?: string; // 'b' 속성을 선택적으로 받도록 변경
  f?: string; // 'b' 속성을 선택적으로 받도록 변경
}
const Input5: React.FC<InputProps> = ({ a, b, c, d, e, f }) => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          width: '80%',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        <h1>{a}</h1>
        <Input placeholder={b} style={{ marginTop: '10px' }} />
        <Input placeholder={c} style={{ marginTop: '10px' }} />
        <Input placeholder={d} style={{ marginTop: '10px' }} />
        <Input placeholder={e} style={{ marginTop: '10px' }} />
        <Input placeholder={f} style={{ marginTop: '10px' }} />
      </div>
    </>
  );
};

export default Input5;
