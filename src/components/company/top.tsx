import React, { useEffect, useState } from 'react';
import { Button, Input, Modal } from 'antd';
import CompanyCreate from '../modal/companycreate';
import { deleteCompanyAPI } from '../apis/company/company';

interface Row {
  companynumber: string;
  company: string;
  companylocation: string;
  companyname: string;
  day: string;
}

interface TopProps {
  data: Row[];
  onReloadData: () => void; // 새로운 함수 추가
}

const Top: React.FC<TopProps> = ({ data, onReloadData }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundCompany, setFoundCompany] = useState<Row | null>(null);
  const [reloadData, setReloadData] = useState(false); // 추가: 데이터 변경 시에 사용
  const showModal = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
    // onReloadData 함수 호출
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
      // Call the API to delete the company
      deleteCompanyAPI(foundCompany.companynumber)
        .then((response) => {
          if (response.success) {
            // Handle successful deletion, e.g., show a message or update the state
            console.log('Company deleted successfully');
            setFoundCompany(null); // Clear the selected company after deletion
            // onReloadData 함수 호출
            onReloadData();
          } else {
            // Handle deletion failure, e.g., show an error message
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
        onCancel() {
          // 사용자가 취소를 눌렀을 때의 동작 (아무 동작 없음)
        },
      });
    }
  };
  useEffect(() => {
    // 데이터 변경이 감지되면 다시 렌더링
    if (reloadData) {
      setReloadData(false); // 변경 여부 초기화
      // 여기에서 필요한 상태 업데이트나 추가적인 작업 수행
      // 예: 다시 데이터를 불러오거나, 상태 업데이트 등
    }
  }, [reloadData, data]);
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
                  cursor: 'pointer', // Make the div clickable
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
            <Button onClick={showModal}>신규등록</Button>
            <Button style={{ marginLeft: '10px' }} onClick={showDeleteConfirm}>
              삭제
            </Button>
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
            {!foundCompany ? (
              <div
                style={{
                  height: '30px',
                  color: 'gray',
                  borderBottom: '1px solid lightgray',
                  padding: '5px',
                }}
              >
                좌측에 사업자를 입력해주세요.
              </div>
            ) : (
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
                  사업자: {foundCompany.company}
                </div>
                <div
                  style={{
                    height: '30px',
                    color: 'gray',
                    borderBottom: '1px solid lightgray',
                    padding: '5px',
                  }}
                >
                  대표자 이름: {foundCompany.companyname}
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
          <h1>버스 정보</h1>
          <div
            style={{
              marginTop: '20px',
              border: '1px solid lightgray',
              borderRadius: '5px',
              boxShadow: '2px 2px 1px 1px lightgray',
            }}
          >
            {!foundCompany ? (
              <div
                style={{
                  height: '30px',
                  color: 'gray',
                  borderBottom: '1px solid lightgray',
                  padding: '5px',
                }}
              ></div>
            ) : (
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
                  대표자 이름: {foundCompany.companyname}
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
