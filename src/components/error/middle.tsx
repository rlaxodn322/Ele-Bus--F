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
    { id: 2, vehicle: '차량2', status: '모터온도', battery: '29˚C' },
    { id: 3, vehicle: '차량3', status: '모터제어기온도', battery: '29˚C' },
    { id: 4, vehicle: '차량1', status: '배터리 최저온도', battery: '29˚C' },
    { id: 5, vehicle: '차량2', status: '배터리팩 충전상태', battery: 'No' },
    { id: 6, vehicle: '차량3', status: '배터리팩 상세온도', battery: '29˚C' },
    { id: 7, vehicle: '차량1', status: 'Four in one상태', battery: '정상' },
    { id: 8, vehicle: '차량2', status: 'VCU제어기능', battery: '가능' },
    { id: 9, vehicle: '차량3', status: '고압박스상태정보', battery: '정상' },
    { id: 10, vehicle: '차량1', status: '전기제어기상태', battery: '정상' },
    { id: 11, vehicle: '차량2', status: '배터리온도정보', battery: '29˚C' },
    { id: 12, vehicle: '차량3', status: '배터리온도정보2', battery: '29˚C' },
    { id: 13, vehicle: '차량1', status: '배터리기본정보', battery: '정상' },
    { id: 14, vehicle: '차량2', status: '배터리최고전압', battery: '397V' },
    { id: 15, vehicle: '차량3', status: '배터리최고전압2', battery: '400V' },

    // 필요한 만큼 데이터를 추가할 수 있습니다.
  ];

  return (
    <>
      <div
        style={{
          width: '90%',
          height: '90%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
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
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
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
              <div style={{ fontSize: '12px', fontWeight: 'bold' }}>{`${data.status}`}</div>
              <div style={{ fontSize: '11px', marginTop: '8px' }}>{`${data.battery}`}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Middle;
