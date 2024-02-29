import React from 'react';
import BusCard from './buscard';
const Top = () => {
  return (
    <>
      <h1>버스 조회/관리</h1>
      <BusCard busCount={0} />
    </>
  );
};

export default Top;
