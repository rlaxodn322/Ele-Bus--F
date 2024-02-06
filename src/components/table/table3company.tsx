import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface Row {
  user: string;
  registrationDate: string;
  status: string;
}

interface CardProps {
  data: Row[];
  columns: string[];
}

const parseDate = (dateString: string): number => {
  const parts = dateString.split('/');
  const datePart = parts[0];

  if (!datePart || datePart.length < 5) {
    // Handle the case where datePart is invalid or too short
    return 0;
  }

  // 여기에 유효한 날짜 파싱 로직 추가

  return 0; // 유효한 날짜가 파싱되지 않을 경우 0을 반환
};

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const [sortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1] = useState<string | string[]>(['latest']);
  const [filterDate, setFilterDate] = useState<string | null>(null);
  const [filterUser] = useState<string | null>(null);
  const [vehicleNumber, setVehicleNumber] = useState<string>('');

  const handleFilter = () => {
    setFilterDate(vehicleNumber);
  };

  const sortedEventHistory = [...data]
    .filter(
      (row) => (!filterDate || row.registrationDate.includes(filterDate)) && (!filterUser || row.user === filterUser),
    )
    .sort((a, b) => {
      const dateA = parseDate(a.registrationDate);
      const dateB = parseDate(b.registrationDate);

      if (sortingOrder === 'oldest') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

  const sortedEventHistory1 = [...columns].sort((a, b) => {
    const dateA = parseDate(a);
    const dateB = parseDate(b);

    if (sortingOrder1 === 'oldest') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  return (
    <>
      <div
        style={{
          width: '99%',
          height: '80%',
        }}
      >
        <div style={{ border: '0px', display: 'flex', justifyContent: 'center' }}>
          <Input
            style={{ width: '80%' }}
            placeholder="차량번호입력"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
          <Button onClick={handleFilter}>검색</Button>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            marginTop: '5px',
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
              position: 'sticky',
              top: '0',
              zIndex: '2',
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
              <div style={{ flex: 1 }}>{row.registrationDate}</div>
              <div style={{ flex: 1 }}>{row.user}</div>
              <div style={{ flex: 1 }}>{row.status}</div>
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
