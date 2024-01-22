import React from 'react';
import Map from '../apis/kakao/map';
import Mqtt from '../apis/mqtt/mqtt';
const Grid = () => {
  return (
    <>
      <div
        style={{
          width: '60%',
          backgroundColor: 'white',
        }}
      >
        <div style={{ height: '70%', boxShadow: '2px 2px 2px 2px gray', borderRadius: '10px' }}>
          <Map />
        </div>
        <div
          style={{
            marginTop: '-10px',
            height: '35%',
            boxShadow: '2px 2px 2px 2px gray',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        >
          <Mqtt />
        </div>
      </div>
      <div style={{ marginLeft: '10px', width: '40%' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '20%',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              width: '49%',
              height: '100%',

              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '2px 2px 2px 2px gray',
            }}
          ></div>
          <div
            style={{
              width: '49%',
              height: '100%',

              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '2px 2px 2px 2px gray',
            }}
          ></div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '20%',
            marginTop: '10px',
            backgroundColor: 'white',
          }}
        >
          <div
            style={{
              width: '49%',
              height: '100%',
              boxShadow: '2px 2px 2px 2px gray',

              borderRadius: '20px',
              backgroundColor: 'white',
            }}
          ></div>
          <div
            style={{
              width: '49%',
              height: '100%',
              boxShadow: '2px 2px 2px 2px gray',
              borderRadius: '20px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
        <div
          style={{
            width: '100%',
            height: '63.5%',
            marginTop: '10px',
            boxShadow: '2px 2px 2px 2px gray',
            backgroundColor: 'white',
            borderRadius: '10px',
          }}
        ></div>
      </div>
    </>
  );
};

export default Grid;
