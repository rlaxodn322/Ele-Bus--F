// Top.tsx

import React from 'react';
import ChartComponent from '../graph/graph';

const Top = () => {
  // colorScheme을 정의
  const colorScheme = ['#ff5733', '#33ff57', '#5733ff'];

  return (
    <>
      <div
        style={{
          marginTop: '10px',
          height: '300px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
          marginRight: '10px',
        }}
      >
        <h1 style={{ marginLeft: '20px' }}>평균 운행시간</h1>
        <ChartComponent colorScheme={colorScheme} />
      </div>
      <div
        style={{
          marginTop: '10px',
          height: '300px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
          marginRight: '10px',
        }}
      >
        <h1 style={{ marginLeft: '20px' }}>평균 운행거리</h1>
        <ChartComponent colorScheme={colorScheme} />
      </div>
      <div
        style={{
          marginTop: '10px',
          height: '300px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
          marginRight: '10px',
        }}
      >
        <h1 style={{ marginLeft: '20px' }}>평균 주차시간</h1>
        <ChartComponent colorScheme={colorScheme} />
      </div>
    </>
  );
};

export default Top;
