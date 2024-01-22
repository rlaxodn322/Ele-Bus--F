import React from 'react';
import Map from '../apis/kakao/map';
import Table from '../dashboard/Table';
interface RowData {
  key: string;
  name: string;
  holding: number;
  operation: number;
  charging: number;
  waiting: number;
  breakdown: number;
  event: number | string; // Assuming event can be either a number or a string
  chargingStation: string;
  location: string;
}
const columns = [
  { title: '구분', dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: '보유', dataIndex: 'holding', key: 'holding' },
  { title: '운행', dataIndex: 'operation', key: 'operation' },
  { title: '충전', dataIndex: 'charging', key: 'charging' },
  { title: '대기', dataIndex: 'waiting', key: 'waiting' },
  { title: '고장', dataIndex: 'breakdown', key: 'breakdown' },
  { title: 'Event', dataIndex: 'event', key: 'event' },
  { title: '충전기', dataIndex: 'chargingStation', key: 'chargingStation' },
  { title: '위치', dataIndex: 'location', key: 'location', fixed: 'right' },
];

const data: RowData[] = [
  {
    key: '1',
    name: '동탄여객',
    holding: 10,
    operation: 7,
    charging: 1,
    waiting: 1,
    breakdown: 1,
    event: 2,
    chargingStation: '2',
    location: '경기',
  },
  {
    key: '2',
    name: '수원여객',
    holding: 20,
    operation: 18,
    charging: 0,
    waiting: 1,
    breakdown: 1,
    event: ' ',
    chargingStation: '2',
    location: '경기',
  },
  {
    key: '3',
    name: '명진여객',
    holding: 30,
    operation: 28,
    charging: 0,
    waiting: 1,
    breakdown: 1,
    event: ' ',
    chargingStation: '3',
    location: '대전',
  },
  {
    key: '4',
    name: '하남운수',
    holding: 10,
    operation: 9,
    charging: 0,
    waiting: 1,
    breakdown: 0,
    event: ' ',
    chargingStation: '1',
    location: '하남',
  },
];

const calculateTotal = (data: RowData[]) => {
  const total = {
    key: '5',
    name: '총계',
    holding: 0,
    operation: 0,
    charging: 0,
    waiting: 0,
    breakdown: 0,
    event: 0,
    chargingStation: ' ',
    location: ' ',
  };

  data.forEach((row) => {
    total.holding += row.holding;
    total.operation += row.operation;
    total.charging += row.charging;
    total.waiting += row.waiting;
    total.breakdown += row.breakdown;
    total.event = typeof row.event === 'number' ? total.event + row.event : total.event;
  });

  return total;
};

const Middle = () => {
  const totalRow = calculateTotal(data);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: '10px',
          boxShadow: '2px 2px 2px 2px lightgray',
          height: '90%',
          width: '100%',
        }}
      >
        <div style={{ width: '50%', height: '100%' }}>
          <Map />
        </div>
        <div style={{ width: '50%', height: '100%' }}>
          <div
            style={{
              height: '100%',
              marginLeft: '10px',
              marginTop: '10px',
            }}
          >
            <Table columns={columns} data={[...data, totalRow]} tableWidth="100%" tableHeight={'550px'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
