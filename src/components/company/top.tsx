import React, { useState } from 'react';
import { Button, Input } from 'antd';
const dummyTableData = [
  { user: '수원여객', registrationDate: '2023-11-08', status: '50' },
  { user: '하남여객', registrationDate: '2023-11-08', status: '10' },
  { user: '오산여객', registrationDate: '2023-11-08', status: '20' },
  { user: '포항여객', registrationDate: '2023-11-08', status: '30' },
  { user: '대천여객', registrationDate: '2023-11-08', status: '40' },
  { user: '대전여객', registrationDate: '2023-11-08', status: '50' },
  { user: '화성여객', registrationDate: '2023-11-08', status: '60' },
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
          height: '40%',
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
              height: '30%',
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
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '40px' }}>
            <Button style={{ marginLeft: '10px', marginRight: '10px', background: '#2B85FF', color: 'white' }}>
              삭제
            </Button>
            <Button style={{ background: '#FB4E4E', color: 'white' }}>신규등록</Button>
          </div>
        </div>

        <div style={{ width: '25%' }}>
          <h1>사업자 정보</h1>
          <div
            style={{
              marginTop: '40px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            수원여객
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 대표명
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 등록번호
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 이메일
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 아이디
          </div>
        </div>
        <div style={{ width: '25%', marginRight: '100px' }}>
          <div
            style={{
              marginTop: '83px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            경기도 수원시 권선구###
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 대표명(김아무개)
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            연락처
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            사업자 운행노선
          </div>
          <div
            style={{
              marginTop: '10px',
              border: '1px solid lightgray',
              height: '30px',
              color: 'lightgray',
              borderRadius: '5px',
              boxShadow: '1px 1px 1px 1px lightgray',
            }}
          >
            비밀번호
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '48px' }}>
            <Button style={{ marginLeft: '10px', marginRight: '10px', background: '#F6C42B', color: 'white' }}>
              수정
            </Button>
            <Button style={{ marginRight: '10px', background: '#27B964', color: 'white' }}>취소</Button>
            <Button style={{ background: '#2B85FF', color: 'white' }}>삭제</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
