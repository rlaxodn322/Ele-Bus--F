import React from 'react';
import { Button } from 'antd';

interface Row {
  user: string;
  registrationDate: string;
  status: string;
  status1: string;
  status2: string;
  status3: string;
  status4: string;
}

interface CardProps {
  data: Row[];
  columns: string[];
}

const parseDate = (dateString: string): number => {
  if (!dateString || typeof dateString !== 'string') {
    return 0;
  }

  const parts = dateString.split('/');
  const datePart = parts[0];
  const timePart = parts[1];

  if (!datePart || datePart.length < 5) {
    return 0;
  }

  const datePartArray = datePart.split('-');
  if (datePartArray.length < 2) {
    return 0;
  }

  const [year, monthDay] = datePartArray;
  const [month, day] = [monthDay.slice(0, 2), monthDay.slice(2)];

  const [hour, minute] = timePart.split(':');

  return new Date(`${year}-${month}-${day}T${hour}:${minute}`).getTime();
};

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const sortedEventHistory = [...data].sort((a, b) => {
    const dateA = parseDate(a.registrationDate);
    const dateB = parseDate(b.registrationDate);

    return dateB - dateA;
  });

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            border: '1px solid lightgray',
            width: '100%',
            height: '100%',
            marginTop: '5px',
            borderRadius: '10px',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '5px',
              background: '#2CA0F3',
              color: 'white',
              borderRadius: '10px',
              position: 'sticky',
              top: '0',
              zIndex: '2',
            }}
          >
            {columns.map((column, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                {column}
              </div>
            ))}
          </div>
          {sortedEventHistory.map((row, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                borderBottom: '1px solid lightgray',
                textAlign: 'center',
                margin: '0',
                color: 'gray',
                alignItems: 'center',
              }}
            >
              <div style={{ flex: 1 }}>{row.user}</div>
              <div style={{ flex: 1 }}>{row.registrationDate}</div>
              <div style={{ flex: 1 }}>{row.status}</div>
              <div style={{ flex: 1 }}>{row.status1}</div>
              <div style={{ flex: 1 }}>{row.status2}</div>
              <div style={{ flex: 1 }}>{row.status3}</div>
              <Button style={{ flex: 1, margin: '0', padding: '0' }}>{row.status4}</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
