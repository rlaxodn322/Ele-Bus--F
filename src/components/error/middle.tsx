import React from 'react';

const Middle = () => {
  const numCols = 3;

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
    height: '80%',
  };

  const cellStyles: CellStyle = {
    width: '100%',
    height: '100%',
    border: '1px solid lightgray',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    boxShadow: '1px 1px 1px 1px lightgray',
  };

  // 더미 데이터
  const dummyData = [
    { id: 1, vehicle: '차량1', status: '운행상태', battery: '운행중' },
    { id: 2, vehicle: '차량2', status: '시동상태', battery: 'ON' },
    { id: 3, vehicle: '차량3', status: '통신상태', battery: 'ON' },
    { id: 4, vehicle: '차량1', status: '운행속도', battery: '60 km/시' },
    { id: 5, vehicle: '차량2', status: '주행거리', battery: '20,000km' },
    { id: 6, vehicle: '차량3', status: '위치', battery: '동탄역' },
    { id: 7, vehicle: '차량1', status: '모터정보', battery: 'ON' },
    { id: 8, vehicle: '차량2', status: '배터리SOC', battery: '50%' },
    { id: 9, vehicle: '차량3', status: '배터리온도', battery: '30˚' },
    { id: 10, vehicle: '차량1', status: '배터리HOC', battery: '35%' },
    { id: 11, vehicle: '차량2', status: '보조배터리 전압', battery: '20V' },
    { id: 12, vehicle: '차량3', status: '이벤트발생', battery: 'NO' },
    { id: 13, vehicle: '차량1', status: '정기점검일', battery: '2023-01-10' },
    { id: 14, vehicle: '차량2', status: '시스템등록일', battery: '2023-01-10' },
    { id: 15, vehicle: '차량3', status: '차량등록일', battery: '2023-01-10' },
    { id: 16, vehicle: '차량3', status: '모델명', battery: 'AAA123' },
    { id: 17, vehicle: '차량3', status: '모델번호', battery: 'AAA12345' },
    { id: 18, vehicle: '차량3', status: '제조사', battery: 'AA모터스' },

    // 필요한 만큼 데이터를 추가할 수 있습니다.
  ];

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '80%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '10%',
            fontWeight: 'bold',
            background: '#2CA0F3',
            fontSize: '18px',
            color: 'white',

            display: 'flex',
            paddingTop: '9px',
            paddingLeft: '10px',
          }}
        >
          상태정보
        </div>
        <div style={gridStyles}>
          {dummyData.map((data, index) => (
            <div key={index} style={cellStyles}>
              <div style={{ fontSize: '12px', color: 'gray' }}>{`${data.status}`}</div>
              <div style={{ fontSize: '11px', marginTop: '8px', fontWeight: 'bold' }}>{`${data.battery}`}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Middle;
