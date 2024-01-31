import React, { useState } from 'react';
import { Button, Input } from 'antd';
const dummyTableData = [
  { user: '수원여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '하남여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '오산여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '포항여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '대천여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '대전여객', registrationDate: '2023-11-08', status: 'Active' },
  { user: '화성여객', registrationDate: '2023-11-08', status: 'Active' },
  // Add more dummy data as needed
];
const Top = () => {
  const [searchInput, setSearchInput] = useState('');
  const handleSearch = () => {
    console.log('Search Input:', searchInput);
    // You can perform any further actions with the searchInput value here
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '55%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 1px 2px lightgray',
        }}
      >
        <div style={{ marginLeft: '100px', width: '25%' }}>
          <h1>사업자검색</h1>
          <div style={{ display: 'flex' }}>
            <Input placeholder="사업자 검색" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <Button style={{ background: '#2B85FF', color: 'white' }} onClick={handleSearch}>
              검색
            </Button>
          </div>
          <h4>사업자리스트</h4>
          <div
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '50%',
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
              <div style={{ flex: 1, textAlign: 'center' }}>등록일</div>
              <div style={{ flex: 1, textAlign: 'center' }}>등록버스</div>
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
                  color: 'gray',
                }}
              >
                <div style={{ flex: 1 }}>{row.user}</div>
                <div style={{ flex: 1 }}>{row.registrationDate}</div>
                <div style={{ flex: 1 }}>{row.status}</div>
              </h6>
            ))}
          </div>
        </div>
        <div style={{ width: '25%' }}>
          <h1>기존 사업자 관리</h1>
          <Input placeholder="사업자 번호"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="사업자 이름"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="주소"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="대표자 이름"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="차량 수"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="권한"></Input>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Button style={{ background: '#2B85FF', color: 'white' }}>편집</Button>
            <Button style={{ marginLeft: '10px', marginRight: '10px', background: '#2B85FF', color: 'white' }}>
              삭제
            </Button>
            <Button style={{ background: '#FB4E4E', color: 'white' }}>취소</Button>
          </div>
        </div>
        <div style={{ marginRight: '100px', width: '25%' }}>
          <h1>신규 사업자 추가</h1>
          <Input placeholder="사업자 번호"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="사업자 이름"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="주소"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="대표자 이름"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="차량 수"></Input>
          <Input style={{ marginTop: '7px' }} placeholder="권한"></Input>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Button style={{ background: '#2B85FF', color: 'white' }}>등록</Button>
            <Button style={{ marginLeft: '10px', marginRight: '10px', background: '#FB4E4E', color: 'white' }}>
              취소
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
