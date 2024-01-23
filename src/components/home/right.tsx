import React from 'react';

const Right = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '100px',
          background: 'white',
        }}
      >
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1 style={{ margin: '20px' }}>보유차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1 style={{ margin: '20px' }}>운행차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1 style={{ margin: '20px' }}>대기차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1 style={{ margin: '20px' }}>점검차량</h1>
        </div>
      </div>
    </>
  );
};

export default Right;
