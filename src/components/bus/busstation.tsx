import React from 'react';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {stations.map((station, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '20px' }}>
            <div style={{ marginRight: '20px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'black' }}>
                {/* You can customize the styling of the station circle here */}
              </div>
            </div>
            <div>
              {station.stationName || 'Unknown Station'}
              {busLocations.some((bus) => bus.stationId === station.stationId) ? ' | 🚌' : ''}
            </div>
            {index < stations.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, 0)',
                  width: '2px',
                  height: '80px', // Adjust the height of the line as needed
                  background: 'black',
                  zIndex: -1,
                }}
              ></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
