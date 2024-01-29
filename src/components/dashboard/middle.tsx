import React from 'react';
import Map from '../apis/kakao/map';
import RightTop from './top';

// Dummy 데이터
const dummyVehicleData = [
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: 'Note A' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: 'Note B' },
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: 'Note A' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: 'Note B' },
  { company: '화성여객', route: 'Route 1', vehicleNum: '1234', soc: '80%', location: 'Location A', note: 'Note A' },
  { company: '오산여객', route: 'Route 2', vehicleNum: '5678', soc: '65%', location: 'Location B', note: 'Note B' },
  // Add more dummy data as needed
];
const dummyEventHistory = [
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: 'Note A' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: 'Note B' },
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: 'Note A' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: 'Note B' },
  { date: '2022-01-01', vehicleNum: '6789', issue: 'Engine Failure', importance: 'High', note: 'Note A' },
  { date: '2022-02-15', vehicleNum: '5678', issue: 'Battery Issue', importance: 'Medium', note: 'Note B' },
  // Add more dummy data as needed
];

const Middle = () => {
  const getCircleColor = (importance: string) => {
    return importance === 'High' ? 'red' : 'green';
  };

  return (
    <>
      <div
        style={{
          marginTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          height: '90%',
          width: '100%',
        }}
      >
        <div style={{ width: '49.5%', height: '100%' }}>
          <Map />
        </div>
        <div style={{ width: '49.5%', height: '100%' }}>
          <h1 style={{ marginLeft: '20px' }}>버스상태</h1>
          <RightTop />
          <h1 style={{ marginLeft: '20px' }}>운행중인 차량정보</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto', // 스크롤이 필요한 경우 자동으로 스크롤 생성
              width: '98.5%',
              height: '21.3%',
              margin: '10px',
              boxShadow: '1px 1px 1px 2px lightgray',
              borderRadius: '10px',
            }}
          >
            {/* 운행중인 차량 정보 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                background: '#2CA0F3',
                color: 'white',
                borderRadius: '10px',
              }}
            >
              <div style={{ flex: 1, textAlign: 'center' }}>운행사</div>
              <div style={{ flex: 1, textAlign: 'center' }}>운행노선</div>
              <div style={{ flex: 1, textAlign: 'center' }}>차량Num</div>
              <div style={{ flex: 1, textAlign: 'center' }}>SOC</div>
              <div style={{ flex: 1, textAlign: 'center' }}>위치</div>
              <div style={{ flex: 1, textAlign: 'center' }}>비고</div>
            </div>
            {dummyVehicleData.map((vehicle, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                <div style={{ flex: 1 }}>{vehicle.company}</div>
                <div style={{ flex: 1 }}>{vehicle.route}</div>
                <div style={{ flex: 1 }}>{vehicle.vehicleNum}</div>
                <div style={{ flex: 1 }}>{vehicle.soc}</div>
                <div style={{ flex: 1 }}>{vehicle.location}</div>
                <div style={{ flex: 1 }}>{vehicle.note}</div>
              </h6>
            ))}
          </div>

          <h1 style={{ marginLeft: '20px' }}>차량 고장 이벤트 이력</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto',
              width: '98.5%',
              height: '21.3%',
              margin: '10px',
              boxShadow: '1px 1px 1px 2px lightgray',
              borderRadius: '10px',
            }}
          >
            {/* 차량 고장 이벤트 이력 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '5px',
                background: '#2CA0F3',
                color: 'white',
                borderRadius: '10px',
              }}
            >
              <div style={{ flex: 1, textAlign: 'center' }}>날짜</div>
              <div style={{ flex: 1, textAlign: 'center' }}>차량Num</div>
              <div style={{ flex: 1, textAlign: 'center' }}>고장정보</div>
              <div style={{ flex: 1, textAlign: 'center' }}>중요도</div>
              <div style={{ flex: 1, textAlign: 'center' }}>비고</div>
            </div>
            {dummyEventHistory.map((event, index) => (
              <h6
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '5px',
                  borderBottom: '1px solid lightgray',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                <div style={{ flex: 1 }}>{event.date}</div>
                <div style={{ flex: 1 }}>{event.vehicleNum}</div>
                <div style={{ flex: 1 }}>{event.issue}</div>
                <div style={{ flex: 1, position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: getCircleColor(event.importance),
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}> {event.note}</div>
              </h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
