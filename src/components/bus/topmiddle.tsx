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
        }}
      >
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />
        <Cascader />

        <Button style={{ background: '#2B85FF', color: 'white' }}>검색</Button>
        <Button style={{ background: '#2B85FF', color: 'white' }}>전체목록</Button>
        <Button style={{ background: '#FF3232', color: 'white' }}>신규 버스 등록</Button>
        <Button style={{ background: '#0ACF83', color: 'white' }}>엑셀다운로드</Button>
      </div>
    </>
  );
};

export default Top;
