import React from 'react';

const data = [
  {
    number: 1,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 2,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 3,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 4,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 7,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 5,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },
  {
    number: 6,
    productionHistory: 'busID',
    busName: '동탄여객',
    busID: '운행중',
    chargingStatus: 'on',
    collectionDate: 'on',
    usage: '20,000km',
    eventCode: '2건',
    eventCode1: '조회',
    eventCode2: '2023-01-01',
    eventCode3: '2023-01-01',
    eventCode4: 'A123-1235',
    eventCode5: 'AAA모터스',
  },

  // Add more data as needed
];

const Middle = () => {
  return (
    <>
      <div
        style={{
          border: '1px solid lightgray',
          width: '100%',
          height: '550px',
          marginTop: '10px',
          borderRadius: '10px',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', background: '#2CA0F3', color: 'white' }}>
          <div style={{ flex: 1, padding: '8px' }}>번호</div>
          <div style={{ flex: 1, padding: '8px' }}>버스ID</div>
          <div style={{ flex: 1, padding: '8px' }}>차량번호</div>
          <div style={{ flex: 1, padding: '8px' }}>운행사</div>
          <div style={{ flex: 1, padding: '8px' }}>시동상태</div>
          <div style={{ flex: 1, padding: '8px' }}>통신상태</div>
          <div style={{ flex: 1, padding: '8px' }}>주행거리</div>
          <div style={{ flex: 1, padding: '8px' }}>이벤트발생</div>
          <div style={{ flex: 1, padding: '8px' }}>DTG</div>
          <div style={{ flex: 1, padding: '8px' }}>등록일</div>
          <div style={{ flex: 1, padding: '8px' }}>차량등록일</div>
          <div style={{ flex: 1, padding: '8px' }}>모델번호</div>
          <div style={{ flex: 1, padding: '8px' }}>제조사</div>
        </div>
        {data.map((row, index) => (
          <div key={index} style={{ display: 'flex', borderBottom: '1px solid lightgray' }}>
            <div style={{ flex: 1, padding: '8px' }}>{row.number}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.productionHistory}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.busName}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.busID}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.chargingStatus}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.collectionDate}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.usage}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode1}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode2}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode3}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode4}</div>
            <div style={{ flex: 1, padding: '8px' }}>{row.eventCode5}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Middle;
