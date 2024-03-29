import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import styled from '@emotion/styled';
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
const Columnstyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #2ca0f3;
  color: white;
  position: sticky;
  top: 0;
  z-index: 2;
  padding-bottom: 10px;
  height: 6.5%;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

const Card: React.FC<CardProps> = ({ data, columns }) => {
  const sortedEventHistory = [...data];
  const sortedEventHistory1 = [...columns];
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Use write function with type 'array' to get Uint8Array data
    const excelData = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    // Create a Blob object
    const dataBlob = new Blob([excelData], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    // Use FileSaver.js or other methods to save the Blob as a file
    saveAs(dataBlob, 'dtg_data.xlsx');
  };
  return (
    <>
      <div
        style={{
          width: '99%',
          height: '100%',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '80%',
            marginTop: '2px',
            overflowY: 'auto',
          }}
        >
          <Columnstyle>
            {sortedEventHistory1.map((column, index) => (
              <div key={index} style={{ flex: 1, textAlign: 'center' }}>
                {column}
              </div>
            ))}
          </Columnstyle>
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
        <div style={{ display: 'flex', justifyContent: 'end', marginRight: '10px', marginTop: '20px' }}>
          <Button onClick={downloadExcel} style={{ marginRight: '10px', background: '#27B964', color: 'white' }}>
            엑셀다운로드
          </Button>
          <Link href="https://www.kotsa.or.kr/main.do">
            <Button type="primary">DTG정보제출하기</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
