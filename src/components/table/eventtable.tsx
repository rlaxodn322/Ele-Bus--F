import React, { useState, useEffect } from 'react';
import { Cascader, Input, Modal, message } from 'antd';
import { deleteEventAPI } from '../apis/event/event';

interface Row {
  companynumber: string;
  busnum: string;
  day: string;
  detail: string;
  status: string;
}

interface CardProps {
  data: Row[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [sortingOrder, setSortingOrder] = useState<string | string[]>(['latest']);
  const [filterDate] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
  const [displayedRows, setDisplayedRows] = useState<Row[]>([]);

  useEffect(() => {
    if (!Array.isArray(data)) {
      console.error('Data is not an array');
      return;
    }

    const filteredRows = data.filter(
      (row) =>
        (!searchKeyword ||
          row.companynumber.includes(searchKeyword) ||
          row.busnum.includes(searchKeyword) ||
          row.day.includes(searchKeyword) ||
          row.detail.includes(searchKeyword) ||
          row.status.includes(searchKeyword)) &&
        (!filterDate || row.day.includes(filterDate)),
    );

    if (filteredRows.length === 0) {
      setDisplayedRows([]);
      return;
    }

    const sortedRows = filteredRows.sort((a, b) => {
      const dateA = a.day.split('.').join('');
      const dateB = b.day.split('.').join('');

      if (sortingOrder === 'oldest') {
        return dateA.localeCompare(dateB);
      } else {
        return dateB.localeCompare(dateA);
      }
    });

    setDisplayedRows(sortedRows);
  }, [data, searchKeyword, filterDate, sortingOrder]);

  const handleDeleteClick = (index: number) => {
    // 사용자에게 확인 메시지 표시
    Modal.confirm({
      title: '삭제 확인',
      content: '삭제하시겠습니까?',
      onOk: () => {
        // 확인 버튼을 눌렀을 때 수행할 로직
        deleteRow(index);
      },
      onCancel: () => {
        // 취소 버튼을 눌렀을 때 수행할 로직
      },
    });
  };
  const deleteRow = async (index: number) => {
    try {
      const deletedEventId = displayedRows[index]?.companynumber;

      if (!deletedEventId) {
        console.error('이벤트 ID가 없습니다.');
        return;
      }

      await deleteEventAPI(deletedEventId);

      // 삭제 성공 시 메시지 표시 및 상태 업데이트
      message.success('이벤트가 성공적으로 삭제되었습니다.');
      setDisplayedRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows.splice(index, 1);
        return updatedRows;
      });
    } catch (error) {
      // 삭제 실패 시 에러 메시지 표시
      message.error('이벤트 삭제 중 오류가 발생했습니다.');
      console.error('이벤트 삭제 오류:', error);
    }
  };

  return (
    <>
      <div
        style={{
          width: '99%',
          height: '90%',
          borderRadius: '10px',
        }}
      >
        <div style={{ border: '0px', display: 'flex', justifyContent: 'end' }}>
          <Cascader
            options={[
              { value: 'oldest1', label: '기간별' },
              { value: 'oldest', label: '늦은 순' },
              { value: 'latest', label: '최신순' },
            ]}
            onChange={(value) => {
              if (value[0] !== 'oldest1') {
                const sortOrder = typeof value[0] === 'number' ? 'latest' : value[0];
                setSortingOrder(sortOrder);
              } else {
                setSortingOrder('latest');
              }
            }}
            defaultValue={['oldest1']}
            style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
          />
          <Input
            style={{ marginLeft: '5px', width: '40%' }}
            placeholder="키워드 검색"
            value={searchKeyword || undefined}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            marginTop: '5px',
            borderRadius: '10px',
            overflowY: 'auto',
          }}
        >
          {displayedRows.map((row, index) => (
            <div
              key={index}
              style={{
                padding: '5px',
                borderBottom: '1px dashed lightgray',
                margin: '0',
                color: 'gray',
                backgroundColor: 'white',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ margin: '10px', fontSize: '13px' }}>
                  <h3>사업자:{row.companynumber}</h3>
                  <h3>버스:{row.busnum}</h3>
                  <h3>날짜: {row.day}</h3>
                  <h3>정비 내용: {row.detail}</h3>
                  <h3>비고: {row.status}</h3>
                </div>
                <div
                  style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer' }}
                  onClick={() => handleDeleteClick(index)}
                >
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
