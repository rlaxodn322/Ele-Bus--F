import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import dummyData from './dummy';
const Middle = () => {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const numCols = 2;

  interface CellStyle {
    width: string;
    height: string;
    border: string;
    borderRadius: string;
    display: string;
    flexDirection?: 'column' | 'row'; // Make flexDirection specific to allowed values
    justifyContent: string;
    alignItems: string;
    padding: string;
    boxShadow: string;
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols}, 1fr)`,
    gap: '10px',
    padding: '10px',
    height: '10%',
  };

  const cellStyles: CellStyle = {
    width: '100%',
    height: '100%',
    border: '',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 데이터 인덱스를 변경하여 순환하도록 설정
      setCurrentDataIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
    }, 4000); // 4초마다 변경

    return () => {
      clearInterval(intervalId); // 컴포넌트 언마운트 시 clearInterval 호출
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '20%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '34%',
            background: '#2CA0F3',
            color: 'white',
            display: 'flex',
            paddingTop: '10px',
          }}
        >
          <h1 style={{ margin: '0 auto' }}>상태정보</h1>
        </div>
        <div style={gridStyles}>
          {dummyData[currentDataIndex].map((data, index) => (
            <div key={index} style={cellStyles}>
              <div style={{ fontSize: '12px', color: 'gray' }}>{`${data.status}`}</div>
              <div style={{ fontSize: '11px', marginTop: '5px', fontWeight: 'bold' }}>{`${data.battery}`}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '415px', marginRight: '10px' }}>
          <Link href="./car/event">
            <Button type="primary">정비이력조회</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Middle;
