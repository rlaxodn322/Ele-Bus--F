import React from 'react';

const Top = () => {
  return (
    <>
      <div
        style={{
          marginTop: '10px',
          height: '300px',
          width: '822px',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '1px ',
          marginRight: '10px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}></div>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          flexFlow: 'column',
          width: '528px',
        }}
      >
        <div
          style={{
            border: '1px solid lightgrey',
            width: '528px',
            height: '50%',
            borderRadius: '10px',
            boxShadow: '1px ',
          }}
        ></div>
        <div
          style={{
            border: '1px solid lightgrey',
            width: '528px',
            height: '50%',
            marginTop: '10px',
            borderRadius: '10px',
            boxShadow: '1px ',
          }}
        ></div>
      </div>
    </>
  );
};

export default Top;
