import React from 'react';
const Right = () => {
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
    { id: 1, vehicle: '차량1', status: '운행기록장치 모델명', battery: 'GTG 기록 ABCD' },
    { id: 2, vehicle: '차량2', status: '차대번호', battery: '123456789123-22' },
    { id: 3, vehicle: '차량3', status: '자동차 유형', battery: '전기버스' },
    { id: 4, vehicle: '차량1', status: '자동차 등록번호', battery: '경기11가 1234' },
    { id: 5, vehicle: '차량2', status: '운송사업자 등록번호', battery: '123-12325-22' },
    { id: 6, vehicle: '차량3', status: '운전자 코드', battery: '123-123456-12' },
    { id: 7, vehicle: '차량1', status: '주행거리(일일/누적)', battery: '' },
    { id: 8, vehicle: '차량2', status: '정보발생일시', battery: '' },
    { id: 9, vehicle: '차량3', status: '차량속도(km/hr)', battery: '' },
    { id: 10, vehicle: '차량1', status: 'RPM', battery: '' },
    { id: 11, vehicle: '차량2', status: '브레이크 신호', battery: '' },
    { id: 12, vehicle: '차량3', status: '가속도', battery: '' },
    { id: 13, vehicle: '차량1', status: '차량위치(GPS X,Y좌표)', battery: '' },
    { id: 14, vehicle: '차량2', status: '위성항법(GPS 방위각)', battery: '' },

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
          DTG정보
        </div>
        <div style={gridStyles}>
          {dummyData.map((data, index) => (
            <div key={index} style={cellStyles}>
              <div style={{ fontSize: '12px', color: 'gray' }}>{`${data.status}`}</div>
              <div style={{ fontSize: '11px', marginTop: '5px', fontWeight: 'bold' }}>{`${data.battery}`}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Right;
