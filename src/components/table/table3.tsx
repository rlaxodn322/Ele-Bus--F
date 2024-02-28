import React, { useState } from 'react';
import { Cascader } from 'antd';
import InputButton from '../../components/inputbutton/inputbutton';
interface Row {
  number: string;
  name: string;
  date: string;
  memo: string;
  status: string;
}

interface CardProps {
  data: Row[];
  columns: string[];
}

const parseDate = (dateString: string): number => {
  const [year, month, day] = dateString.split('-');

  // If any part of the date is not a valid number, return 0
  if (isNaN(Number(year)) || isNaN(Number(month)) || isNaN(Number(day))) {
    return 0;
  }

  return new Date(`${year}-${month}-${day}`).getTime();
};

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1] = useState<string | string[]>(['latest']);
  const [filterDate] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  const sortedEventHistory = [...data]
    .filter(
      (row) =>
        (!filterDate || row.date.includes(filterDate)) &&
        (searchInput === '' ||
          row.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          row.memo.toLowerCase().includes(searchInput.toLowerCase())),
    )
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

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
          height: '260px',
          borderRadius: '10px',
        }}
      >
        <InputButton a="부품 검색" name="부품 이름 검색" onChange={(value) => setSearchInput(value)} />
        <div style={{ border: '0px', display: 'flex', justifyContent: 'end' }}>
          <Cascader
            options={[
              { value: 'oldest1', label: '기간별' },
              { value: 'oldest', label: '늦은 순' },
              { value: 'latest', label: '최신순' },
            ]}
            onChange={(value) => {
              if (value[0] === 'oldest1') {
                // 기간별을 선택한 경우에는 특별한 동작을 수행하거나 필요에 따라 처리를 추가할 수 있습니다.
                // 예를 들어, DatePicker를 띄우거나 다른 필터 작업을 수행할 수 있습니다.
              } else {
                const sortOrder = value[0] === 'oldest' ? 'oldest' : 'latest';
                setSortingOrder(sortOrder);
              }
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
              <div style={{ flex: 1 }}>{row.date}</div>
              <div style={{ flex: 1 }}>{row.name}</div>
              <div style={{ flex: 1 }}>{row.memo}</div>
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
