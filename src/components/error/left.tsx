import React from 'react';

const Left = () => {
  const data = [
    { id: 1323, vehicle: '123호1234', status: 'On' },
    { id: 2131, vehicle: '123호1234', status: 'On' },
    { id: 3544, vehicle: '123호1234', status: 'OFF' },
    { id: 4123, vehicle: '321호4321', status: 'OFF' },
    { id: 5123, vehicle: '321호4321', status: 'OFF' },
    { id: 6123, vehicle: '321호4321', status: 'OFF' },
    { id: 7123, vehicle: '321호4321', status: 'On' },
    { id: 8123, vehicle: '321호4321', status: 'On' },
    { id: 1323, vehicle: '123호1234', status: 'On' },
    { id: 2131, vehicle: '123호1234', status: 'On' },
    { id: 3544, vehicle: '123호1234', status: 'OFF' },
    { id: 4123, vehicle: '321호4321', status: 'OFF' },
    { id: 5123, vehicle: '321호4321', status: 'OFF' },
    { id: 6123, vehicle: '321호4321', status: 'OFF' },
    { id: 7123, vehicle: '321호4321', status: 'On' },
    { id: 8123, vehicle: '321호4321', status: 'On' },
    { id: 1323, vehicle: '123호1234', status: 'On' },
    { id: 2131, vehicle: '123호1234', status: 'On' },
  ];

  // 테이블 컬럼 정의
  const columns = [
    { Header: '버스ID', accessor: 'id' },
    { Header: '차량번호', accessor: 'vehicle' },
    { Header: '통신', accessor: 'status' },
  ];

  return (
    <>
      <div
        style={{
          width: '32%',
          height: '100%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
          overflow: 'hidden',
        }}
      >
        <div style={{ width: '100%', height: '10%' }}>
          <h1 style={{ marginLeft: '50px' }}>수원여객차량</h1>
        </div>
        <div
          style={{
            width: '100%',
            height: '80%',
            padding: '10px',
            fontSize: '18px',

            position: 'relative', // 부모 요소에 relative 위치 설정
          }}
        >
          {/* 헤더 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '20px',
              position: 'sticky', // 헤더를 화면 상단에 고정
              top: 0, // 화면 상단에 고정
              backgroundColor: 'white',
              zIndex: 1, // 다른 요소 위에 표시
            }}
          >
            {columns.map((column) => (
              <div key={column.Header} style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                {column.Header}
              </div>
            ))}
          </div>

          {/* 데이터 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 'calc(100% - 40px)',
              overflowY: 'auto',
            }}
          >
            {data.map((row) => (
              <div
                key={row.id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: '15px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                }}
              >
                {columns.map((column) => (
                  <div key={column.Header} style={{ flex: 1, textAlign: 'center' }}>
                    {row[column.accessor as keyof typeof row]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
