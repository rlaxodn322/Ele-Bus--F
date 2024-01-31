import React from 'react';

const Left = () => {
  const data = [
    { id: 1323, vehicle: '123호1234', status: 'On', soc: '80%' },
    { id: 2131, vehicle: '123호1234', status: 'On', soc: '80%' },
    { id: 3544, vehicle: '123호1234', status: 'OFF', soc: '80%' },
    { id: 4123, vehicle: '321호4321', status: 'OFF', soc: '80%' },
    { id: 5123, vehicle: '321호4321', status: 'OFF', soc: '80%' },
    { id: 6123, vehicle: '321호4321', status: 'OFF', soc: '80%' },
    { id: 7123, vehicle: '321호4321', status: 'On', soc: '80%' },
    { id: 8123, vehicle: '321호4321', status: 'On', soc: '80%' },
    { id: 1323, vehicle: '123호1234', status: 'On', soc: '80%' },
    { id: 2131, vehicle: '123호1234', status: 'On', soc: '80%' },
    { id: 3544, vehicle: '123호1234', status: 'OFF', soc: '80%' },
  ];

  // 테이블 컬럼 정의
  const columns = [
    { Header: '운행노선', accessor: 'id' },
    { Header: '차량번호', accessor: 'vehicle' },
    { Header: '운행상태', accessor: 'status' },
    { Header: 'SOC', accessor: 'soc' },
  ];

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '90%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            fontSize: '18px',
            position: 'relative', // 부모 요소에 relative 위치 설정
          }}
        >
          <div
            style={{
              width: '100%',
              height: '10%',
              margin: '0',
              position: 'sticky', // 헤더를 화면 상단에 고정
              top: 0, // 화면 상단에 고정
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '10px',
              color: 'white',
            }}
          >
            {columns.map((column) => (
              <div
                key={column.Header}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  background: '#2CA0F3',
                }}
              >
                <div style={{ margin: '10px' }}> {column.Header}</div>
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
                  color: 'gray',
                  borderBottom: '1px solid lightgray',
                }}
              >
                {columns.map((column) => (
                  <div
                    key={column.Header}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      color: row.status === 'On' ? '#2B85FF' : '#27B964', // Conditional color based on status
                    }}
                  >
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
