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
          <h4 style={{ margin: '0 auto' }}>{dtgRecordTitle}</h4>
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
