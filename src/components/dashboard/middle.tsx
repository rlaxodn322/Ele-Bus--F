// import React, { useState } from 'react';

// import { Cascader } from 'antd'; // antd의 Cascader 컴포넌트를 사용
// // import Map from '../apis/kakao/map';
// // import Mqtt from '../apis/mqtt/mqtt';

// // Dummy 데이터
// const dummyVehicleData = [
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '충전/대기', soc: '65%', note: 'no' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   { company: '화성여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '80%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '운행', soc: '65%', note: 'no' },
//   { company: '오산여객', route: '경기11가1234', vehicleNum: 'Route 1', location: '고장', soc: '65%', note: 'on' },
//   // Add more dummy data as needed
// ];

// const Middle = () => {
//   // Add markers for 10 locations in Osan City
//   // const markerPositions = [
//   //   { title: '하남운수', lat: 37.549899, lng: 127.216505 },
//   //   { title: '오산운수', lat: 37.149528, lng: 127.077071 },
//   //   { title: '수원운수', lat: 37.263573, lng: 127.028601 },
//   //   { title: '평택운수', lat: 36.990437, lng: 127.092379 },
//   //   { title: '부산운수', lat: 35.179554, lng: 129.075642 },
//   //   { title: '안성운수', lat: 36.990437, lng: 127.092379 },
//   //   { title: '포항운수', lat: 36.019986, lng: 129.342938 },
//   //   { title: '울산운수', lat: 35.538377, lng: 129.311359 },
//   //   { title: '대구운수', lat: 35.871435, lng: 128.601445 },
//   //   { title: '대천운수', lat: 36.491065, lng: 126.494356 },
//   // ];
//   // const mapHeight = '680px';
//   const uniqueCompanies = Array.from(new Set(dummyVehicleData.map((vehicle) => vehicle.company)));

//   const [sortingOrder] = useState<string | string[]>(['latest']);
//   const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

//   // 운행중인 차량 정보 필터링 함수
//   const companyOptions = [
//     { value: '전체보기', label: '전체보기' },
//     ...uniqueCompanies.map((company) => ({ value: company, label: company })),
//   ];
//   // 운행중인 차량 정보 필터링 함수
//   const getFilteredVehicleData = () => {
//     if (selectedCompany === null || selectedCompany === '전체보기') {
//       return dummyVehicleData;
//     } else {
//       return dummyVehicleData.filter((vehicle) => vehicle.company === selectedCompany);
//     }
//   };

//   const sortedVehicleData = getFilteredVehicleData().sort((a, b) => {
//     const companyA = a.company.toLowerCase();
//     const companyB = b.company.toLowerCase();

//     if (sortingOrder === 'asc') {
//       return companyA.localeCompare(companyB);
//     } else {
//       return companyB.localeCompare(companyA);
//     }
//   });

//   return (
//     <>
//       <div style={{ display: 'flex', height: '100%', width: '100%' }}>
//         <div style={{ width: '49.5%', height: '100%' }}>
//           <h1>버스 현황</h1>
//           {/* <Map markerPositions={markerPositions} mapHeight={mapHeight} /> */}
//         </div>
//         <div style={{ width: '49.5%', height: '100%' }}>
//           <h1 style={{ marginLeft: '20px' }}>버스상태</h1>
//           <div
//             style={{
//               height: '12%',
//               marginLeft: '10px',
//               marginTop: '10px',
//               background: 'white',
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <div
//               style={{
//                 width: '49%',
//                 height: '100%',
//                 boxShadow: '1px 1px 1px 2px lightgray',
//                 borderRadius: '10px',
//               }}
//             >
//               <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>전체</h3>
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   paddingLeft: '20px',
//                   paddingRight: '20px',
//                 }}
//               >
//                 <h2>2 대</h2>
//                 <img style={{ width: '20%', marginBottom: '20px' }} src="images/bus-svgrepo-com (8).svg"></img>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: '49%',
//                 height: '100%',
//                 boxShadow: '1px 1px 1px 2px lightgray',
//                 borderRadius: '10px',
//               }}
//             >
//               <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>운행</h3>
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   paddingLeft: '20px',
//                   paddingRight: '20px',
//                 }}
//               >
//                 <h2>2 대</h2>
//                 <img
//                   style={{ width: '20%', marginBottom: '20px' }}
//                   src="images/bus-transport-svgrepo-com (2).svg"
//                 ></img>
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               height: '12%',
//               marginLeft: '10px',
//               marginTop: '13px',
//               background: 'white',
//               display: 'flex',
//               justifyContent: 'space-between',
//             }}
//           >
//             <div
//               style={{
//                 width: '49%',
//                 height: '100%',
//                 boxShadow: '1px 1px 1px 2px lightgray',
//                 borderRadius: '10px',
//               }}
//             >
//               <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>충전/대기</h3>
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   paddingLeft: '20px',
//                   paddingRight: '20px',
//                 }}
//               >
//                 <h2>2 대</h2>
//                 <img style={{ width: '20%', marginBottom: '20px' }} src="images/stop-circle-svgrepo-com.svg"></img>
//               </div>
//             </div>
//             <div
//               style={{
//                 width: '49%',
//                 height: '100%',
//                 boxShadow: '1px 1px 1px 2px lightgray',
//                 borderRadius: '10px',
//               }}
//             >
//               <h3 style={{ margin: '20px', marginBottom: '0', marginTop: '10px' }}>고장</h3>
//               <div
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   paddingLeft: '20px',
//                   paddingRight: '20px',
//                 }}
//               >
//                 {/* <Mqtt /> */}
//                 <h2>2 대</h2>
//                 <img
//                   style={{ width: '20%', marginBottom: '20px' }}
//                   src="images/danger-circle-svgrepo-com (1).svg"
//                 ></img>
//               </div>
//             </div>
//           </div>
//           <h1 style={{ marginLeft: '20px', marginBottom: '0' }}>운행중인 차량정보</h1>
//           <div style={{ marginBottom: '5px', border: '0px', display: 'flex', justifyContent: 'end' }}>
//             <Cascader
//               options={companyOptions}
//               onChange={(value) => {
//                 setSelectedCompany(value[0] as string | null);
//               }}
//               defaultValue={['전체보기']}
//               style={{ marginLeft: '20px', margin: '0px', border: '0px' }}
//             />
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               overflowY: 'auto',
//               width: '98.5%',
//               height: 'calc(54% - 30px)',
//               marginLeft: '10px',
//               boxShadow: '1px 1px 1px 2px lightgray',
//               borderRadius: '10px',
//             }}
//           >
//             <div
//               style={{
//                 position: 'sticky',
//                 top: '0',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 padding: '5px',
//                 background: '#2CA0F3',
//                 color: 'white',
//                 borderRadius: '10px',
//                 zIndex: '1',
//                 fontSize: '17px',
//               }}
//             >
//               <div style={{ flex: 1, textAlign: 'center' }}>운행사</div>
//               <div style={{ flex: 1, textAlign: 'center' }}>차량번호</div>
//               <div style={{ flex: 1, textAlign: 'center' }}>운행노선</div>
//               <div style={{ flex: 1, textAlign: 'center' }}>운행상태</div>
//               <div style={{ flex: 1, textAlign: 'center' }}>SOC</div>
//               <div style={{ flex: 1, textAlign: 'center' }}>이벤트발생</div>
//             </div>
//             {sortedVehicleData.map((vehicle, index) => (
//               <h6
//                 key={index}
//                 style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   padding: '5px',
//                   borderBottom: '1px solid lightgray',
//                   textAlign: 'center',
//                   margin: '0',
//                   fontSize: '14px',
//                   // 수정된 부분 시작

//                   color:
//                     vehicle.location === '운행'
//                       ? vehicle.note === 'no'
//                         ? 'blue'
//                         : 'red'
//                       : vehicle.location === '충전/대기'
//                       ? 'green'
//                       : 'red',
//                   // 수정된 부분 끝
//                 }}
//               >
//                 <div style={{ flex: 1 }}>{vehicle.company}</div>
//                 <div style={{ flex: 1 }}>{vehicle.route}</div>
//                 <div style={{ flex: 1 }}>{vehicle.vehicleNum}</div>
//                 <div style={{ flex: 1 }}>{vehicle.location}</div>
//                 <div style={{ flex: 1 }}>{vehicle.soc}</div>
//                 <div style={{ flex: 1 }}>{vehicle.note}</div>
//               </h6>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Middle;
