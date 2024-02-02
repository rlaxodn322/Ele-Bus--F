import React, { useState } from 'react';
import { Cascader } from 'antd';

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
const parseDate = (dateString: string): number => {
  const parts = dateString.split('/');
  const datePart = parts[0];
  const timePart = parts[1];

  if (!datePart || datePart.length < 5) {
    // Handle the case where datePart is invalid or too short
    return 0;
  }

  const [year, monthDay] = datePart.split('-');
  const [month, day] = [monthDay.slice(0, 2), monthDay.slice(2)];

  const [hour, minute] = timePart.split(':');

  return new Date(`${year}-${month}-${day}T${hour}:${minute}`).getTime();
};
const Card: React.FC<CardProps> = ({ data, columns }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1] = useState<string | string[]>(['latest']);
  const [filterDate] = useState<string | null>(null);
  const [filterStatus3, setFilterStatus3] = useState<string | null>(null);

  const sortedEventHistory = [...data]
    .filter(
      (row) =>
        (!filterDate || row.registrationDate.includes(filterDate)) && (!filterStatus3 || row.status3 === filterStatus3),
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

  // Options for the Cascader filtering by status3
  const status3Options = Array.from(new Set(data.map((row) => row.status3)));

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
          {/* Cascader for sorting order */}
          <Cascader
            options={[
              { value: 'oldest1', label: '기간별' },
              { value: 'oldest', label: '늦은 순' },
              { value: 'latest', label: '최신순' },
            ]}
            onChange={(value) => {
              if (value[0] !== 'oldest1') {
                const sortOrder = typeof value[0] === 'number' ? 'latest' : value[0];
                setSortingOrder(sortOrder);
              } else {
                setSortingOrder('latest');
              }
            }}
            defaultValue={['oldest1']}
            style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
          />

          {/* Cascader for filtering by status3 */}
          <Cascader
            options={[
              { value: 'all', label: '전체 담당자' },
              ...status3Options.map((option) => ({ value: option, label: option })),
            ]}
            onChange={(value) => {
              if (value[0] !== 'all') {
                setFilterStatus3(value[0].toString());
              } else {
                setFilterStatus3(null);
              }
            }}
            defaultValue={['all']}
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
