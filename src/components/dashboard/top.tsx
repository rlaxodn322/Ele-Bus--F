import React from 'react';
import Mqtt from '../apis/mqtt/mqtt';
const Top = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '15%',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '19%',
            height: '100%',
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px lightgray',
            background: 'white',
          }}
        >
          <h1 style={{ margin: '20px' }}>등록버스</h1>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px lightgray',
            width: '19%',
            height: '100%',
            background: 'white',
          }}
        >
          <h1 style={{ margin: '20px' }}>운행중</h1>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px lightgray',
            width: '19%',
            height: '100%',
            background: 'white',
          }}
        >
          <h1 style={{ margin: '20px' }}>대기/충전중</h1>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px lightgray',
            width: '19%',
            height: '100%',
            background: 'white',
          }}
        >
          <h1 style={{ margin: '20px' }}>점검/수리중</h1>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '2px 2px 2px 2px lightgray',
            width: '19%',
            height: '100%',
            background: 'white',
          }}
        >
          <h1 style={{ margin: '20px' }}>배터리정보</h1>
          <div>
            <Mqtt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
