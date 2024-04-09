import React from 'react';
import styled from '@emotion/styled';
const DivWapper = styled.div`
  margin-left: 10px;
  height: 120px;
  background: white;
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin-bottom: 7px;
  @media (max-width: 1100px) {
    height: 120px;
    width: 97%;
  }
`;
interface BusCardProps {
  // eslint-disable-next-line no-unused-vars
  onFilterChange: (location: string) => void;
  vihiclelength: number; // vihiclelength 속성 추가
}
const BusCard: React.FC<BusCardProps> = ({ onFilterChange, vihiclelength }) => {
  const handleClick = (location: string) => {
    onFilterChange(location); // 변경된 상태를 부모 컴포넌트로 전달
    console.log(location);
  };
  return (
    <>
      <DivWapper>
        <div
          onClick={() => handleClick('전체')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>전체</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>{vihiclelength} 대</h2>
            <img style={{ width: '20%', marginBottom: '60px' }} src="images/bus-svgrepo-com (7).svg" alt="bus"></img>
          </div>
        </div>
        <div
          onClick={() => handleClick('운행')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>운행</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>{vihiclelength} 대</h2>
            <img
              style={{ width: '20%', marginBottom: '60px' }}
              src="images/bus-transport-svgrepo-com (2).svg"
              alt="bus"
            ></img>
          </div>
        </div>
      </DivWapper>
      <DivWapper>
        <div
          onClick={() => handleClick('충전/대기')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>충전/대기</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>0 대</h2>
            <img
              style={{ width: '20%', marginBottom: '0px' }}
              src="images/stop-circle-svgrepo-com.svg"
              alt="stop"
            ></img>
          </div>
        </div>
        <div
          onClick={() => handleClick('고장')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>고장</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <h2>0 대</h2>
            <img
              style={{ width: '20%', marginBottom: '20px' }}
              src="images/danger-circle-svgrepo-com (1).svg"
              alt="danger"
            ></img>
          </div>
        </div>
      </DivWapper>
    </>
  );
};

export default BusCard;
