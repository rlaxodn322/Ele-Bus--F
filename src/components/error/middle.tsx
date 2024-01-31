import React from 'react';

const Middle = () => {
  return (
    <>
      <div
        style={{
          width: '90%',
          height: '90%',
          background: 'white',
          borderRadius: '10px',
          boxShadow: '1px 1px 2px 2px lightgray',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '10%',
            fontWeight: 'bold',
            background: '#2CA0F3',
            fontSize: '18px',
            color: 'white',
            borderTopLeftRadius: '10px', // 위쪽 왼쪽 모서리에만 적용
            borderTopRightRadius: '10px', // 위쪽 오른쪽 모서리에만 적용
          }}
        >
          <div style={{ padding: '13px' }}>상태정보</div>
        </div>
        <div style={{ width: '100%', height: '80%' }}></div>
      </div>
    </>
  );
};

export default Middle;
