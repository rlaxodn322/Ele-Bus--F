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
          <h3 style={{ margin: '20px', marginBottom: '0' }}>전체</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img src="images/bus-transport-svgrepo-com.svg"></img>
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
          <h3 style={{ margin: '20px', marginBottom: '0' }}>운행</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img src="images/bus-transport-svgrepo-com.svg"></img>
          </div>
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
          <h3 style={{ margin: '20px', marginBottom: '0' }}>대기/충전</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>2</h2>
            <img src="images/bus-transport-svgrepo-com.svg"></img>
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
          <h3 style={{ margin: '20px' }}>고장</h3>

          <Mqtt />
        </div>
      </div>
    </>
  );
};

export default Top;
