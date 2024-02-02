import React, { useState } from 'react';
import { Cascader } from 'antd';

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

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1] = useState<string | string[]>(['latest']);

  const sortedEventHistory = [...data].sort((a, b) => {
    const dateA = new Date(a.registrationDate).getTime();
    const dateB = new Date(b.registrationDate).getTime();

    if (sortingOrder === 'oldest') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const sortedEventHistory1 = [...columns].sort((a, b) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();

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
          borderRadius: '10px',
        }}
      >
        <div style={{ border: '0px', display: 'flex', justifyContent: 'end' }}>
          <Cascader
            options={[
              { value: 'oldest1', label: '기본' },
              { value: 'oldest', label: '늦은 순' },
              { value: 'latest', label: '최신순' },
            ]}
            onChange={(value) => {
              const sortOrder = typeof value[0] === 'number' ? 'latest' : value[0];
              setSortingOrder(sortOrder);
            }}
            defaultValue={['oldest1']}
            style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
          />
        </div>
        <div
          style={{
            border: '1px solid lightgray',
            width: '100%',
            height: '70%',
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
              <div style={{ flex: 1 }}>{row.status2}</div>
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
