import React, { useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import CompanyCreate from '../modal/companycreate';
import { deleteCompanyAPI } from '../apis/company/company';

interface Row {
  buses: {
    carNumber: string;
    carinfo: string;
    carmodel: string;
    routeNumber: string;
  }[];
  companynumber: string;
  company: string;
  companylocation: string;
  companyname: string;
  day: string;
  carNumber: string;
  carinfo: string;
  carmodel: string;
  routeNumber: string;
}

interface TopProps {
  data: Row[];
  onReloadData: () => void;
}

const Top: React.FC<TopProps> = ({ data, onReloadData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundCompany, setFoundCompany] = useState<Row | null>(null);
  const [reloadData, setReloadData] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    onReloadData();
  };

  const handleSearch = () => {
    const foundCompany = data.find((row) => row.company === searchInput);

    if (foundCompany) {
      setFoundCompany(foundCompany);
    } else {
      setFoundCompany(null);
    }
  };

  const handleCompanyClick = (clickedCompany: Row) => {
    setFoundCompany(clickedCompany);
  };

  const handleDeleteClick = () => {
    if (foundCompany) {
      deleteCompanyAPI(foundCompany.companynumber)
        .then((response) => {
          if (response.success) {
            console.log('Company deleted successfully');
            setFoundCompany(null);
            onReloadData();
          } else {
            console.error('Company deletion failed:', response.error);
          }
        })
        .catch((error) => {
          console.error('Error calling deleteCompanyAPI:', error);
        });
    }
  };

  const showDeleteConfirm = () => {
    if (foundCompany) {
      Modal.confirm({
        title: '사업자 삭제',
        content: `사업자 ${foundCompany?.company}을(를) 정말로 삭제하시겠습니까?`,
        onOk() {
          handleDeleteClick();
        },
        onCancel() {},
      });
    }
  };

  useEffect(() => {
    if (reloadData) {
      setReloadData(false);
    }
  }, [reloadData, data]);

  const infoBoxStyle = {
    marginTop: '20px',
    border: '1px solid lightgray',
    borderRadius: '5px',
    boxShadow: '2px 2px 1px 1px lightgray',
    padding: '5px',
    marginBottom: '20px', // Add margin-bottom for spacing
  };
  const initialCompanies = data.slice(0, 100);

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
            <Button type="primary" onClick={handleSearch}>
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
                  cursor: 'pointer',
                }}
                onClick={() => handleCompanyClick(row)}
              >
                <div style={{ flex: 1 }}>{row.company}</div>
                <div style={{ flex: 1 }}>{row.day}</div>
                <div style={{ flex: 1 }}>{row.companyname}</div>
              </h6>
            ))}
          </div>
          <div style={{ height: '120px', display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
            <Button type="primary" onClick={showModal}>
              신규등록
            </Button>
            <Button type="primary" danger style={{ marginLeft: '10px' }} onClick={showDeleteConfirm}>
              삭제
            </Button>
            <CompanyCreate open={modalOpen} onCancel={handleCancel} />
          </div>
        </div>

        <div style={{ width: '25%' }}>
          <h1>사업자 정보</h1>
          <div style={infoBoxStyle}>
            {!foundCompany ? (
              <div style={{ height: '30px', color: 'gray', padding: '5px' }}>좌측에 사업자를 입력해주세요.</div>
            ) : (
              <>
                <div style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}>
                  사업자 번호: {foundCompany.companynumber}
                </div>
                <div style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}>
                  사업자: {foundCompany.company}
                </div>
                <div style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}>
                  대표자 이름: {foundCompany.companyname}
                </div>
                <div style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}>
                  사업자 주소: {foundCompany.companylocation}
                </div>
                <div style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}>
                  등록일: {foundCompany.day}
                </div>
              </>
            )}
          </div>
        </div>

        <div style={{ width: '25%', marginRight: '100px' }}>
          <h1>버스 정보</h1>
          <div style={infoBoxStyle}>
            {!foundCompany ? (
              <div
                style={{
                  height: '30px',
                  color: 'gray',
                  padding: '5px',
                }}
              >
                선택된 회사가 없습니다.
              </div>
            ) : (
              <>
                {foundCompany.buses && foundCompany.buses.length > 0 ? (
                  foundCompany.buses.map((bus, index) => (
                    <div key={index}>
                      <div
                        style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}
                      >
                        사업자 번호: {foundCompany.companynumber}
                      </div>
                      <div
                        style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}
                      >
                        버스 번호: {bus.carNumber}
                      </div>
                      <div
                        style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}
                      >
                        버스 정보: {bus.carinfo}
                      </div>
                      <div
                        style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}
                      >
                        버스 모델: {bus.carmodel}
                      </div>
                      <div
                        style={{ height: '30px', color: 'gray', borderBottom: '1px solid lightgray', padding: '5px' }}
                      >
                        버스 노선: {bus.routeNumber}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>해당 회사의 버스 정보가 없습니다.</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
