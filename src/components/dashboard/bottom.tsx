import React from 'react';
import Map from '../apis/kakao/map';
// Define styles as a constant
const styles = {
  mainContainer: {
    marginTop: '10px',
    height: '300px',
    width: '822px',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: '1px ',
    marginRight: '10px',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
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
    boxShadow: '1px ',
  },
  subContainerWithMargin: {
    marginTop: '10px',
  },
};

const Top = () => {
  return (
    <>
      <div style={styles.mainContainer}>
        <div style={styles.innerContainer}>
          <h1>운행중인 차량</h1>
          <Map />
        </div>
      </div>
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
