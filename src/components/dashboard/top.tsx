import React from 'react';
import Map from '../apis/kakao/map';
const styles = {
  mainContainer: {
    marginTop: '10px',
    height: '900px',
    width: '735px',
    border: '1px solid lightgrey',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    marginRight: '10px',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px',
  },
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
    marginLeft: '50px',
    padding: '0',
    marginTop: '5px',
    marginBottom: '0',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '50px',
    marginBottom: '10px',
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
      <div style={styles.mainContainer}>
        <div style={styles.innerContainer}>
          <Map />
        </div>
      </div>
      {/* <div>
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
            <h1 style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '25px' }}>주차/충전</h1>
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>1대</h1>
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
            <h1 style={{ marginTop: '40px', marginLeft: '10px' }}>1대</h1>
          </div>

          <div>
            <img style={styles.imagestyle} src="images/bus-transport-svgrepo-com(1).svg"></img>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Top;
