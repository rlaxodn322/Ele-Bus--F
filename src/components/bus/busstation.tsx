// MyComponent 코드
import React from 'react';

// BusLocation 타입 정의
interface BusLocation {
  stationId: string;
  remainSeatCnt: string;
  stationName: string;
}

interface MyComponentProps {
  stations: BusLocation[];
  busLocations: BusLocation[];
}

const MyComponent: React.FC<MyComponentProps> = ({ stations, busLocations }) => {
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
