import React from 'react';
const dummyTableData = [
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  { user: 'User_A001', registrationDate: '2023-11-08', status: 'Active' },
  // Add more dummy data as needed
];
const Middle = () => {
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
            height: '90%',
          }}
        >
          <h1>사업자별 사용이력</h1>
          <div
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '80%',
              marginTop: '20px',
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
            {dummyTableData.map((row, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
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
            height: '90%',
            marginRight: '20px',
          }}
        >
          <h1>신규 사업자 등록 이력</h1>
          <div
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '80%',
              marginTop: '20px',
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
            {dummyTableData.map((row, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
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
