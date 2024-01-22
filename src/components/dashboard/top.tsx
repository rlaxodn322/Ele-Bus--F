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
          }}
        >
          등록버스
        </div>
        <div style={{ borderRadius: '10px', boxShadow: '2px 2px 2px 2px lightgray', width: '19%', height: '100%' }}>
          운행중
        </div>
        <div style={{ borderRadius: '10px', boxShadow: '2px 2px 2px 2px lightgray', width: '19%', height: '100%' }}>
          대기/충전중
        </div>
        <div style={{ borderRadius: '10px', boxShadow: '2px 2px 2px 2px lightgray', width: '19%', height: '100%' }}>
          점검/수리중
        </div>
        <div style={{ borderRadius: '10px', boxShadow: '2px 2px 2px 2px lightgray', width: '19%', height: '100%' }}>
          배터리정보
          <div>
            <Mqtt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
