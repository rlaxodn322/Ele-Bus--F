import React from 'react';

interface BusCardProps {
  // eslint-disable-next-line no-unused-vars
  onFilterChange: (location: string) => void;
}

const BusCard: React.FC<BusCardProps> = ({ onFilterChange }) => {
  const handleClick = (location: string) => {
    onFilterChange(location);
  };

  return (
    <>
      <div
        style={{
          height: '120px',
          marginLeft: '10px',
          marginTop: '10px',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          onClick={() => handleClick('전체')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
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
            <h2>2 대</h2>
            <img style={{ width: '20%', marginBottom: '20px' }} src="images/bus-svgrepo-com (8).svg" alt="bus"></img>
          </div>
        </div>
        <div
          onClick={() => handleClick('운행')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
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
            <h2>2 대</h2>
            <img
              style={{ width: '20%', marginBottom: '20px' }}
              src="images/bus-transport-svgrepo-com (2).svg"
              alt="bus"
            ></img>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '120px',
          marginLeft: '10px',
          marginTop: '13px',
          background: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          onClick={() => handleClick('충전/대기')}
          style={{
            width: '49%',
            height: '100%',
            boxShadow: '1px 1px 1px 2px lightgray',
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
            <h2>2 대</h2>
            <img
              style={{ width: '20%', marginBottom: '20px' }}
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
            boxShadow: '1px 1px 1px 2px lightgray',
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
            <h2>2 대</h2>
            <img
              style={{ width: '20%', marginBottom: '20px' }}
              src="images/danger-circle-svgrepo-com (1).svg"
              alt="danger"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusCard;
