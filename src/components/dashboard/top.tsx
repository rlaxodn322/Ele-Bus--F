import React from 'react';
import Progress from '../antd/progress';

const styles = {
  container: {
    marginTop: '10px',
    height: '300px',
    width: '822px',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: '1px ',
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
    width: '259px',
    height: '145px',
    marginRight: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    boxShadow: '1px ',
    border: '1px solid lightgrey',
  },
  subContainerSmall: {
    width: '259px',
    height: '145px',
    marginRight: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    boxShadow: '1px ',
    border: '1px solid lightgrey',
  },
};

const Top = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>상태</h1>
        <div style={styles.progressContainer}>
          <Progress />
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
        <div style={styles.subContainerLarge}></div>
        <div style={styles.subContainerSmall}></div>
      </div>
      <div>
        <div style={styles.subContainerLarge}></div>
        <div style={styles.subContainerSmall}></div>
      </div>
    </>
  );
};

export default Top;
