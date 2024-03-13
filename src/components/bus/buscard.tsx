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
  @media (max-width: 768px) {
    flex-direction: column;
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
        <div
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '1px 1px 2px 2px lightgray',
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
            <h2>10 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/bus-svgrepo-com (8).svg"></img>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '1px 1px 2px 2px lightgray',
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
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '1px 1px 2px 2px lightgray',
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
            <h2>2 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/stop-circle-svgrepo-com.svg"></img>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '1px 1px 2px 2px lightgray',
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
            <h2>2 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="/images/danger-circle-svgrepo-com (1).svg"></img>
          </div>
        </div>
        {/* </div> */}
      </BusWapper>
    </>
  );
};

export default BusCard;
