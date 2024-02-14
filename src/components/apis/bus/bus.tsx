import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [stations, setStations] = useState([]);
  const [busLocations, setBusLocations] = useState([]);

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
        setBusLocations(response.data.stations);
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
    <div>
      <h1>버스 정류소 목록</h1>
      <ul>
        {stations.map((station, index) => (
          <li key={index}>
            {(station as any).stationName || 'Unknown Station'}
            {busLocations.some((bus) => bus.stationId === station.stationId) ? (
              <span style={{ color: 'green' }}> | Bus Check</span>
            ) : (
              <span style={{ color: 'red' }}> </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
