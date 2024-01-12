import React from 'react';
import ChartComponent from '../graph/graph';
const Top = () => {
  return (
    <>
      <div
        style={{
          marginTop: '10px',
          height: '250px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '1px ',
          marginRight: '10px',
        }}
      >
        <ChartComponent />
      </div>
      <div
        style={{
          marginTop: '10px',
          height: '250px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '1px ',
          marginRight: '10px',
        }}
      >
        {' '}
        <ChartComponent />
      </div>
      <div
        style={{
          marginTop: '10px',
          height: '250px',
          width: '33%',
          border: '1px solid lightgrey',
          borderRadius: '10px',
          boxShadow: '1px ',
          marginRight: '10px',
        }}
      >
        {' '}
        <ChartComponent />
      </div>
    </>
  );
};

export default Top;
