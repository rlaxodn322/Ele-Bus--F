import React from 'react';

interface BusLocation {
  plateType: string;
  plateNo: string;
  stationId: string;
  remainSeatCnt: string;
}
interface LeftProps {
  busLocations: BusLocation[];
}

const Left: React.FC<LeftProps> = ({ busLocations }) => {
  // 테이블 컬럼 정의
  const columns = [
    { Header: '운행노선', accessor: 'routeId' },
    { Header: '차량번호', accessor: 'plateNo' },
    { Header: '정류소', accessor: 'stationId' },
    { Header: '빈자리수', accessor: 'remainSeatCnt' },
  ];

  return (
    <>
      <div style={{ width: '100%', height: '80%' }}>
        <div
          style={{
            width: '100%',
            height: '100%',
            fontSize: '18px',
            position: 'relative',
            borderRadius: '10px',
            background: 'white',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '8%',
              margin: '0',
              position: 'sticky',
              top: 0,
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '10px',
              color: 'white',
              borderRadius: '10px',
              fontSize: '15px',
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

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 'calc(100% - 40px)',
              overflowY: 'auto',
            }}
          >
            {busLocations.map((row, index) => (
              <div
                key={index}
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
                      color: 'gray', // You can set a color based on conditions
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
