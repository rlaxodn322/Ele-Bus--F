import React from 'react';

// Define styles as a constant
const styles = {
  columnContainer: {
    display: 'flex',
    marginTop: '10px',
    flexFlow: 'column',
    width: '528px',
  },
  subContainer: {
    border: '1px solid lightgrey',
    width: '528px',
    height: '145px',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
  },
  subContainerWithMargin: {
    marginTop: '10px',
  },
};

const Top = () => {
  return (
    <>
      <div style={styles.columnContainer}>
        <div style={styles.subContainer}>
          <h2 style={{ marginLeft: '20px' }}>공지사항</h2>
          <h4 style={{ marginLeft: '40px' }}>등록된 데이터가 없습니다.</h4>
        </div>
        <div style={{ ...styles.subContainer, ...styles.subContainerWithMargin }}>
          <h2 style={{ marginLeft: '20px' }}>고객센터</h2>
          <h4 style={{ marginLeft: '40px' }}>taewoo@firstcorea.com 로 문의해 주세요.</h4>
          <h4 style={{ marginLeft: '40px' }}>고객님께 최상의 서비스를 제공할 수 있도록 노력하겠습니다.</h4>
        </div>
      </div>
    </>
  );
};

export default Top;
