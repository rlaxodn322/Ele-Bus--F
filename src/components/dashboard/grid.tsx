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
        <div style={{ height: '70%', boxShadow: '2px 2px 2px 2px gray' }}>
          <Map />
        </div>
        <div style={{ marginTop: '10px', height: '30%', boxShadow: '2px 2px 2px 2px gray', backgroundColor: 'white' }}>
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
              width: '48%',
              height: '100%',

              borderRadius: '20px',
              backgroundColor: 'white',
              boxShadow: '2px 2px 2px 2px gray',
            }}
          ></div>
          <div
            style={{
              width: '48%',
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
              width: '48%',
              height: '100%',
              boxShadow: '2px 2px 2px 2px gray',

              borderRadius: '20px',
              backgroundColor: 'white',
            }}
          ></div>
          <div
            style={{
              width: '48%',
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
            height: '58%',
            marginTop: '10px',
            boxShadow: '2px 2px 2px 2px gray',
            backgroundColor: 'white',
          }}
        ></div>
      </div>
    </>
  );
};

export default Grid;
