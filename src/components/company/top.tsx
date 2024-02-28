import React, { useState } from 'react';
import { Button, Input } from 'antd';
import CompanyCreate from '../modal/companycreate';

interface Row {
  companynumber: string;
  company: string;
  companylocation: string;
  companyname: string;
  day: string;
}

interface TopProps {
  data: Row[];
}
const Top: React.FC<TopProps> = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false); // visible 상태 대신
  const [searchInput, setSearchInput] = useState('');
  // Modal 열기 함수
  const showModal = () => {
    setModalOpen(true);
  };

  // Modal 닫기 함수
  const handleCancel = () => {
    setModalOpen(false);
  };
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
          height: '350px',
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
          <h4 style={{ margin: '3px' }}>사업자리스트</h4>
          <div
            style={{
              border: '1px solid lightgray',
              width: '100%',
              height: '150px',
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
              <div style={{ flex: 1, textAlign: 'center' }}>등록일</div>
              <div style={{ flex: 1, textAlign: 'center' }}>사업자대표명</div>
            </div>
            {data.map((row, index) => (
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
                <div style={{ flex: 1 }}>{row.company}</div>
                <div style={{ flex: 1 }}>{row.day}</div>
                <div style={{ flex: 1 }}>{row.companyname}</div>
              </h6>
            ))}
          </div>
          <div style={{ height: '120px', display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
            <Button onClick={showModal} style={{}}>
              신규등록
            </Button>
            <Button style={{ marginLeft: '10px' }}>삭제</Button>
            <CompanyCreate open={modalOpen} onCancel={handleCancel} />
          </div>
        </div>

        <div style={{ width: '25%' }}>
          <h1>사업자 정보</h1>
          <div
            style={{
              marginTop: '20px',
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
              marginTop: '65px',
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
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '10px' }}>
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
