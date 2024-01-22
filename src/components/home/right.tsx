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
        }}
      >
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1>보유차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1>운행차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1>대기차량</h1>
        </div>
        <div style={{ width: '24%', height: '100px', boxShadow: '2px 2px 2px 2px lightgray', borderRadius: '10px' }}>
          <h1>점검차량</h1>
        </div>
      </div>
    </>
  );
};

export default Right;
