import React from 'react';
import styled from '@emotion/styled';
interface BusCardProps {
  busCount: number;
}
const BusWapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
const BusInfo = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 1px 1px 2px 2px lightgray;
  border-radius: 10px;
  background-color: white;
  margin-right: 10px;

  @media (max-width: 1100px) {
    width: 50%;
    height: 50%;
  }
`;

const BusCard: React.FC<BusCardProps> = ({ busCount }) => {
  return (
    <>
      <BusWapper>
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100px',
          }}
        > */}
        <BusInfo
          style={{
            width: '100%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            background: 'white',
            marginRight: '10px',
            marginBottom: '10px',
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
            <h2>{busCount} 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/bus-svgrepo-com (7).svg"></img>
          </div>
        </BusInfo>
        <BusInfo
          style={{
            width: '100%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            marginRight: '10px',
            marginBottom: '10px',
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
            <h2>{busCount} 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/bus-transport-svgrepo-com (2).svg"></img>
          </div>
        </BusInfo>
        <BusInfo
          style={{
            width: '100%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            background: 'white',
            marginRight: '10px',
            marginBottom: '10px',
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
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/stop-circle-svgrepo-com.svg"></img>
          </div>
        </BusInfo>
        <BusInfo
          style={{
            width: '100%',
            height: '100%',
            boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
            borderRadius: '10px',
            background: 'white',
            marginRight: '10px',
            marginBottom: '10px',
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
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/danger-circle-svgrepo-com (1).svg"></img>
          </div>
        </BusInfo>
        {/* </div> */}
      </BusWapper>
    </>
  );
};

export default BusCard;
