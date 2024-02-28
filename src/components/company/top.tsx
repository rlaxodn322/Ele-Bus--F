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
  const [modalOpen, setModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundCompany, setFoundCompany] = useState<Row | null>(null);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    const foundCompany = data.find((row) => row.company === searchInput);

    if (foundCompany) {
      setFoundCompany(foundCompany);
    } else {
      // Set foundCompany to null if no match is found
      setFoundCompany(null);
    }
  };

  // Display the first five companies initially
  const initialCompanies = data.slice(0, 5);

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
            {/* Display the first five companies initially */}
            {initialCompanies.map((row, index) => (
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
            <Button onClick={showModal}>신규등록</Button>
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
              borderRadius: '5px',
              boxShadow: '2px 2px 1px 1px lightgray',
            }}
          >
            {/* Display search prompt if no company is selected */}
            {!foundCompany ? (
              <div
                style={{
                  height: '30px',
                  color: 'gray',
                  borderBottom: '1px solid lightgray',
                  padding: '5px',
                }}
              >
                우측에 사업자를 입력해주세요.
              </div>
            ) : (
              /* Display found company information if available */
              <>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 번호: {foundCompany.companynumber}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 이름: {foundCompany.companyname}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 주소: {foundCompany.companylocation}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  등록일: {foundCompany.day}
                </div>
              </>
            )}
          </div>
        </div>

        <div style={{ width: '25%', marginRight: '100px' }}>
          <h1>사업자 정보</h1>
          <div
            style={{
              marginTop: '20px',
              border: '1px solid lightgray',
              borderRadius: '5px',
              boxShadow: '2px 2px 1px 1px lightgray',
            }}
          >
            {/* Display search prompt if no company is selected */}
            {!foundCompany ? (
              <div
                style={{
                  height: '30px',
                  color: 'gray',
                  borderBottom: '1px solid lightgray',
                  padding: '5px',
                }}
              >
                우측에 사업자를 입력해주세요.
              </div>
            ) : (
              /* Display found company information if available */
              <>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 번호: {foundCompany.companynumber}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 이름: {foundCompany.companyname}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  사업자 주소: {foundCompany.companylocation}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  등록일: {foundCompany.day}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
