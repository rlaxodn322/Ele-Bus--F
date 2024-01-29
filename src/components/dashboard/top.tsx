import React from 'react';
import Mqtt from '../apis/mqtt/mqtt';
const Top = () => {
  return (
    <>
      <div
        style={{
          height: '15%',
          marginLeft: '10px',
          marginTop: '10px',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px' }}>전체</h3>
        </div>
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px' }}>운행</h3>
        </div>
      </div>
      <div
        style={{
          height: '15%',
          marginLeft: '10px',
          marginTop: '10px',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px' }}>대기/충전</h3>
        </div>
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px' }}>고장</h3>
          <Mqtt />
        </div>
      </div>
    </>
  );
};

export default Top;
