import React, { useState } from 'react';
import { Cascader } from 'antd'; // antd의 Cascader 컴포넌트를 사용
const dummyTableData = [
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-05', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-01', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-02', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-03', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-04', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-05', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-06', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-07', status: 'Active' },
  // Add more dummy data as needed
];
const dummyTableData1 = [
  { user: 'User_A001', registrationDate: '2023-11-09', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-01', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-02', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-03', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-03', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-01', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-05', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-09', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-10', status: 'Active' },
  // Add more dummy data as needed
];
const Middle = () => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [sortingOrder1, setSortingOrder1] = useState<string | string[]>(['latest']);

  const sortedEventHistory = [...dummyTableData].sort((a, b) => {
    const dateA = new Date(a.registrationDate).getTime();
    const dateB = new Date(b.registrationDate).getTime();

    if (sortingOrder === 'oldest') {
      return dateA - dateB;
    } else {
      // Default to 'latest' if sortingOrder is not 'oldest'
      return dateB - dateA;
    }
  });

  const sortedEventHistory1 = [...dummyTableData1].sort((a, b) => {
    const dateA = new Date(a.registrationDate).getTime();
    const dateB = new Date(b.registrationDate).getTime();

    if (sortingOrder1 === 'oldest') {
      return dateA - dateB;
    } else {
      // Default to 'latest' if sortingOrder1 is not 'oldest'
      return dateB - dateA;
    }
  });

  return (
    <>
      <div
        style={{
          marginTop: '15px',
          width: '100%',
          height: '40%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 1px 2px lightgray',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            marginLeft: '20px',
            width: '50%',
            height: '74%',
          }}
        >
          <h1>사업자별 사용이력</h1>
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
              height: '80%',
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
              <div style={{ flex: 1, textAlign: 'center' }}>사업자</div>
              <div style={{ flex: 1, textAlign: 'center' }}>날짜</div>
              <div style={{ flex: 1, textAlign: 'center' }}>운행시간</div>
              <div style={{ flex: 1, textAlign: 'center' }}>총 운행량</div>
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
                <div style={{ flex: 1 }}>{row.status}</div>
              </h6>
            ))}
          </div>
        </div>
        <div
          style={{
            width: '40%',
            height: '74%',
            marginRight: '20px',
          }}
        >
          <h1>신규 사업자 등록 이력</h1>
          <div style={{ border: '0px', display: 'flex', justifyContent: 'end' }}>
            <Cascader
              options={[
                { value: 'oldest1', label: '기본' },
                { value: 'oldest', label: '늦은 순' },
                { value: 'latest', label: '최신순' },
              ]}
              onChange={(value) => {
                const sortOrder = typeof value[0] === 'number' ? 'latest' : value[0];
                setSortingOrder1(sortOrder);
              }}
              defaultValue={['oldest1']}
              style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
            />
          </div>
          <div
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '80%',
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
              <div style={{ flex: 1, textAlign: 'center' }}>날짜</div>
              <div style={{ flex: 1, textAlign: 'center' }}>사업자</div>
              <div style={{ flex: 1, textAlign: 'center' }}>소속</div>
              <div style={{ flex: 1, textAlign: 'center' }}>상태</div>
            </div>
            {sortedEventHistory1.map((row, index) => (
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
                <div style={{ flex: 1 }}>{row.status}</div>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
