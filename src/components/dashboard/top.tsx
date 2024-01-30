import React from 'react';
import Mqtt from '../apis/mqtt/mqtt';
const Top = () => {
  return (
    <>
      <div
        style={{
          height: '12%',
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
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>전체</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="images/bus-svgrepo-com (8).svg"></img>
          </div>
        </div>
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>운행</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="images/bus-transport-svgrepo-com (2).svg"></img>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '12%',
          marginLeft: '10px',
          marginTop: '13px',
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
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>대기/충전</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="images/stop-circle-svgrepo-com.svg"></img>
          </div>
        </div>
        <div
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
            borderRadius: '10px',
          }}
        >
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>고장</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <Mqtt />
            <img style={{ width: '20%', marginBottom: '20px' }} src="images/danger-circle-svgrepo-com (1).svg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
