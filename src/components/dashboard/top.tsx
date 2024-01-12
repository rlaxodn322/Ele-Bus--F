import React from 'react';
import Progress from '../antd/progress';
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
        <h1 style={{ margin: '20px' }}>상태</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Progress />
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px' }}>
            <img style={{ width: '20px' }} src="images/circle-svgrepo-com (1).svg"></img>
            운행
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '50px', marginTop: '10px' }}>
            <img style={{ width: '20px' }} src="images/circle-svgrepo-com (2).svg"></img>
            주차
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '10px',
          height: '300px',
          width: '528px',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '1px ',
        }}
      >
        <div style={{ border: '1px solid lightgrey', width: '50%', height: '50%', margin: '10px' }}></div>
        <div style={{ border: '1px solid lightgrey', width: '50%', height: '50%', margin: '10px' }}></div>
      </div>
    </>
  );
};

export default Top;
