import React from 'react';

const Right = () => {
  return (
    <>
      <div
        style={{
          width: '90%',
          height: '90%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
        }}
      >
        <div style={{ width: '100%', height: '10%' }}></div>
        <div style={{ width: '100%', height: '80%', border: '1px solid lightgray' }}></div>
      </div>
    </>
  );
};

export default Right;
