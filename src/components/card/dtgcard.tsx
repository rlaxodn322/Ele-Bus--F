import React from 'react';

interface DataItem {
  status: string;
  battery: string;
  // 추가적인 속성이 있다면 여기에 추가
}

interface RightProps {
  data: DataItem[];
  dtgRecordTitle: string;
}

const Right: React.FC<RightProps> = ({ data, dtgRecordTitle }) => {
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
    padding: '8px',
    boxShadow: '1px 1px 1px 1px lightgray',
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '62%',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '41px',
            background: '#2CA0F3',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h1 style={{ margin: '0 auto' }}>{dtgRecordTitle}</h1>
        </div>
        <div style={gridStyles}>
          {data.map((data, index) => (
            <div key={index} style={cellStyles}>
              <div style={{ fontSize: '12px', color: 'gray' }}>{`${data.status}`}</div>
              <div style={{ fontSize: '11px', marginTop: '5px', fontWeight: 'bold' }}>{`${data.battery}`}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px' }}></div>
      </div>
    </>
  );
};

export default Right;
