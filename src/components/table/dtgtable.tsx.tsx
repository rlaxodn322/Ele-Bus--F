import React from 'react';

interface Row {
  user: string;
  registrationDate: string;
  status: string;
  status1: string;
  status2: string;
  status3: string;
}

interface CardProps {
  data: Row[];
  columns: string[];
}

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const sortedEventHistory = [...data];
  const sortedEventHistory1 = [...columns];

  return (
    <>
      <div
        style={{
          width: '99%',
          height: '82%',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '70%',
            marginTop: '2px',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#2CA0F3',
              color: 'white',
              position: 'sticky',
              top: '0',
              zIndex: '2',
              paddingTop: '10px',
              height: '10%',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {sortedEventHistory1.map((column, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                {column}
              </div>
            ))}
          </div>
          {sortedEventHistory.map((row, index) => (
            <h6
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                borderBottom: '1px solid lightgray',
                textAlign: 'center',
                margin: '0',
                color: 'gray',
              }}
            >
              <div style={{ flex: 1 }}>{row.user}</div>
              <div style={{ flex: 1 }}>{row.registrationDate}</div>
              <div style={{ flex: 1 }}>{row.status}</div>
              <div style={{ flex: 1 }}>{row.status1}</div>
              <div style={{ flex: 1 }}>{row.status2}</div>
              <div style={{ flex: 1 }}>{row.status3}</div>
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
