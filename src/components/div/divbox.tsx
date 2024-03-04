import React from 'react';
import Button3 from '../../components/button/button3';
interface DivBoxprops {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  b?: string; // 'b' 속성을 선택적으로 받도록 변경
  c?: string; // 'b' 속성을 선택적으로 받도록 변경
  d?: string; // 'b' 속성을 선택적으로 받도록 변경
  e?: string; // 'b' 속성을 선택적으로 받도록 변경
}
const DivBox: React.FC<DivBoxprops> = ({ a, b, c, d, e }) => {
  return (
    <>
      <div style={{ color: 'lightgray' }}>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          {a}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          {b}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          {c}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          {d}
        </div>
        <div
          style={{
            width: '80%',
            height: '30px',
            border: '1px solid lightgray',
            borderRadius: '5px',
            margin: '0 auto',
            marginTop: '10px',
          }}
        >
          {e}
        </div>
      </div>
      <Button3 a="편집" b="삭제" c="취소" />
    </>
  );
};

export default DivBox;
