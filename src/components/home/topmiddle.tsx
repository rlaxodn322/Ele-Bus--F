import React from 'react';
import { Cascader, Button } from 'antd';
const Top = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '35px',
          background: 'white',
          marginTop: '20px',
          marginBottom: '0',
          paddingBottom: '0',
          border: '0',
        }}
      >
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />
        <Button>검색</Button>
        <Button>전체목록</Button>
        <Button>엑셀다운로드</Button>
      </div>
    </>
  );
};

export default Top;
