import React, { useState, useEffect } from 'react';
import { Cascader, Input } from 'antd';

const parseDate = (dateString: string | undefined) => {
  const date = dateString || new Date().toISOString();
  const splitDate = date.split('-');
  return splitDate;
};

interface EventDataValues {
  day: string;
  detail: string;
  status: string;
}

interface Row {
  user: string;
  registrationDate: string;
  status: string;
}

interface CardProps {
  data: Row[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [filterDate] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
  const [displayedRows, setDisplayedRows] = useState<Row[]>([]);
  console.log(displayedRows);
  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error('Data is not an array');
      return;
    }

    const filteredRows = data.filter(
      (row) =>
        (!searchKeyword ||
          row.user.includes(searchKeyword) ||
          row.registrationDate.includes(searchKeyword) ||
          row.status.includes(searchKeyword)) &&
        (!filterDate || row.registrationDate.includes(filterDate)),
    );

    if (filteredRows.length === 0) {
      setDisplayedRows([]);
      return;
    }

    const sortedRows = filteredRows.sort((a, b) => {
      const dateA = parseDate(a.registrationDate);
      const dateB = parseDate(b.registrationDate);

      if (sortingOrder === 'oldest') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setDisplayedRows(sortedRows);
  }, [data, searchKeyword, filterDate, sortingOrder]);

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
          <Input
            style={{ marginLeft: '5px', width: '40%' }}
            placeholder="키워드 검색"
            value={searchKeyword || undefined}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            marginTop: '5px',
            borderRadius: '10px',
            overflowY: 'auto',
          }}
        >
          {displayedRows.map((row, index) => (
            <h6
              key={index}
              style={{
                padding: '5px',
                borderBottom: '1px dashed lightgray',
                margin: '0',
                color: 'gray',
              }}
            >
              <div style={{ margin: '10px' }}>
                <h3>날짜: {row.registrationDate}</h3>
                <h3>정비 내용: {row.user}</h3>
                <h3>비고: {row.status}</h3>
              </div>
            </h6>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
