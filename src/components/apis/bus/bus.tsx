// MyComponent 코드
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// BusLocation 타입 정의
interface BusLocation {
  stationId: string;
  remainSeatCnt: string;
  stationName: string;
  // 다른 속성들도 필요하다면 추가
}

const MyComponent = () => {
  const [stations, setStations] = useState<BusLocation[]>([]);
  const [busLocations, setBusLocations] = useState<BusLocation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stations');
        setStations(response.data.stations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBusLocations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/bus');
        setBusLocations(response.data.stations); // <- Here was the issue
      } catch (error) {
        console.error(error);
      }
    };

    // 초기 호출
    fetchBusLocations();

    // 1분마다 호출
    const intervalId = setInterval(fetchBusLocations, 60000);

    // 컴포넌트가 언마운트되면 clearInterval을 호출하여 인터벌 제거
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>
            {station.stationName || 'Unknown Station'}
            {busLocations.some((bus) => bus.stationId === station.stationId) ? <span> | 🚌 </span> : <span> </span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
