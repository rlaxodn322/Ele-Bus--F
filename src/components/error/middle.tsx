import React from 'react';

const Middle = () => {
  return (
    <>
      <div
        style={{
          width: '32%',
          height: '100%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
        }}
      >
        <div style={{ width: '100%', height: '10%' }}>
          <h1 style={{ marginLeft: '30px' }}>123호 1234</h1>
        </div>
        <div style={{ width: '100%', height: '80%', border: '1px solid lightgray' }}></div>
      </div>
    </>
  );
};

export default Middle;
