import React from 'react';

import CustomProgress from '../antd/progress';

const styles = {
  container: {
    marginTop: '10px',
    height: '300px',
    width: '822px',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    marginRight: '10px',
  },
  header: {
    margin: '20px',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '50px',
  },
  subContainer: {
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: '1px ',
  },
  subContainerLarge: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '259px',
    height: '145px',
    marginRight: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    border: '1px solid lightgrey',
  },
  subContainerSmall: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '259px',
    height: '145px',
    marginRight: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    border: '1px solid lightgrey',
  },
  imagestyle: {
    marginTop: '60px',
    marginRight: '20px',
    width: '80px',
  },
};

const Top = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>상태</h1>
        <div style={styles.progressContainer}>
          <div style={{ marginRight: '50px' }}>
            <CustomProgress percent={70} />
            <h1>운행상황</h1>
          </div>
          <div style={{ marginRight: '50px' }}>
            <CustomProgress percent={50} />
            <h1>고장상황</h1>
          </div>
          <div style={{ marginRight: '50px' }}>
            <CustomProgress percent={10} />
            <h1>충전소상황</h1>
          </div>
        </div>
        <div>
          <div style={styles.infoContainer}>
            <img style={{ width: '20px' }} src="images/circle-svgrepo-com (1).svg" alt="운행 아이콘" />
            운행
          </div>

          <div style={styles.infoContainer}>
            <img style={{ width: '20px' }} src="images/circle-svgrepo-com (2).svg" alt="주차 아이콘" />
            주차
          </div>
        </div>
      </div>
      <div>
        <div style={styles.subContainerLarge}>
          <div>
            <h1 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>전체</h1>
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>4대</h1>
          </div>

          <div>
            <img style={styles.imagestyle} src="images/bus-front-view-with-sign-svgrepo-com.svg"></img>
          </div>
        </div>
        <div style={styles.subContainerSmall}>
          <div>
            <h1 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>주차</h1>
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>2대</h1>
          </div>

          <div>
            <img style={styles.imagestyle} src="images/bus-parking-sign-svgrepo-com(1).svg"></img>
          </div>
        </div>
      </div>
      <div>
        <div style={styles.subContainerLarge}>
          <div>
            <h1 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>운행</h1>
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>2대</h1>
          </div>

          <div>
            <img style={styles.imagestyle} src="images/bus-transport-svgrepo-com.svg"></img>
          </div>
        </div>
        <div style={styles.subContainerSmall}>
          <div>
            <h1 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>고장</h1>
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>0대</h1>
          </div>

          <div>
            <img style={styles.imagestyle} src="images/bus-transport-svgrepo-com(1).svg"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
