import React, { useState } from 'react';
import { Cascader } from 'antd';

interface Bus {
  carNumber: string;
  carinfo: string;
  carmodel: string;
  companyNumber: string;
  createdAt: string | null;
  day: string;
  id: number;
  model: string;
  routeNumber: string;
  updatedAt: string | null;
}

interface CardProps {
  data: Bus[];
  columns: string[];
  a?: string;
}

const parseDate = (dateString: string): number => {
  const [year, month, day] = dateString.split('-');

  // If any part of the date is not a valid number, return 0
  if (isNaN(Number(year)) || isNaN(Number(month)) || isNaN(Number(day))) {
    return 0;
  }

  return new Date(`${year}-${month}-${day}`).getTime();
};
const Card: React.FC<CardProps> = ({ data, columns, a }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1] = useState<string | string[]>(['latest']);
  const [filterDate] = useState<string | null>(null);
  const [filterStatus3, setFilterStatus3] = useState<string | null>(null);

  const sortedEventHistory = [...data]
    .filter(
      (row) =>
        (!filterDate || (row.day && row.day.includes(filterDate))) && (!filterStatus3 || row.model === filterStatus3),
    )
    .sort((a, b) => {
      const dateA = a.day ? parseDate(a.day) : 0;
      const dateB = b.day ? parseDate(b.day) : 0;

      if (sortingOrder === 'oldest') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  // sortedEventHistory1 정렬 부분 수정
  const sortedEventHistory1 = [...columns].sort((a, b) => {
    const dateA = parseDate(a);
    const dateB = parseDate(b);

    if (sortingOrder1 === 'oldest') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  // 수정된 부분: Cascader의 options에 model을 추가
  const status3Options = Array.from(new Set(data.map((row) => row.model)));

  return (
    <>
      <div
        style={{
          width: '99%',
          height: '300px',
          borderRadius: '10px',
        }}
      >
        <div style={{ border: '0px', display: 'flex', justifyContent: 'end' }}>
          <Cascader
            options={[
              { value: 'oldest1', label: '기간별' },
              { value: 'oldest', label: '과거 순' },
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
          <Cascader
            options={[
              { value: 'all', label: a },
              ...status3Options.map((option) => ({ value: option, label: option })),
            ]}
            onChange={(value) => {
              // 수정된 부분: onChange에서 value[0]을 사용하여 상태를 업데이트
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
            height: '240px',
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
              <div style={{ flex: 1 }}>{row.companyNumber}</div>
              <div style={{ flex: 1 }}>{row.day}</div>
              <div style={{ flex: 1 }}>{row.carNumber}</div>
              <div style={{ flex: 1 }}>{row.carinfo}</div>
              <div style={{ flex: 1 }}>{row.carmodel}</div>
              <div style={{ flex: 1 }}>{row.routeNumber}</div> {/* 여기 수정 */}
              <div style={{ flex: 1 }}>{row.model}</div> {/* 다른 status 사용 예시 */}
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
