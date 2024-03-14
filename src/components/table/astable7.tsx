import React, { useState } from 'react';
import { Cascader, Button } from 'antd';
import * as XLSX from 'xlsx';
import styled from '@emotion/styled';
interface MaintenanceHistoryItem {
  registrationDate: any;
  number: string;
  name: string;
  date: string;
  memo: string;
  status: string;
}

interface CardProps {
  data: MaintenanceHistoryItem[];
  columns: string[];
  a?: string;
}
const ColumnStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #2ca0f3;
  color: white;
  border-radius: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  @media (max-width: 1100px) {
    font-size: 10px;
  }
`;
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
  const [filterStatus3, setFilterStatus3] = useState<string | null>(null);

  const sortedEventHistory = [...data]
    .filter(
      (row) =>
        (!filterDate || (row.date && row.date.includes(filterDate))) && (!filterStatus3 || row.memo === filterStatus3),
    )
    .sort((a, b) => {
      const dateA = a.date ? parseDate(a.date) : 0;
      const dateB = b.date ? parseDate(b.date) : 0;

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

  // Options for the Cascader filtering by status3
  const status3Options = Array.from(new Set(data.map((row) => row.memo)));
  // 엑셀 다운로드 함수
  const downloadExcel = (data: any[], columns: any[], fileName: string) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();

    // 컬럼 레이블 정보를 엑셀에 추가
    XLSX.utils.sheet_add_aoa(worksheet, [columns.map((column: { label: any }) => column.label)], { origin: -1 });

    // 데이터를 엑셀에 추가
    XLSX.utils.sheet_add_json(worksheet, data, { origin: 1, skipHeader: true });

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };
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
          {/* Cascader for sorting order */}
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
          {/* Cascader for filtering by status3 */}
          <Cascader
            options={[
              { value: 'all', label: '전체부품' },
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
          <div style={{ marginLeft: '10PX' }}>
            <Button
              style={{ marginRight: '5px', background: '#27B964', color: 'white' }}
              onClick={() => downloadExcel(data, columns, '부품 리스트 현황')}
            >
              엑셀다운로드
            </Button>
          </div>
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
          <ColumnStyle
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
          </ColumnStyle>
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
              <div style={{ flex: 1 }}>{row.number}</div>
              <div style={{ flex: 1 }}>{row.date}</div>
              <div style={{ flex: 1 }}>경기</div>
              <div style={{ flex: 1 }}>{row.status}</div>
              <div style={{ flex: 1 }}>1시30분</div>
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
