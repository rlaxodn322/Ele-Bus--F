import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveLine } from '@nivo/line';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [acColor, setACColor] = useState<string>('red');
  // eslint-disable-next-line no-unused-vars
  const [dcColor, setDCColor] = useState<string>('red');
  // eslint-disable-next-line no-unused-vars
  const [acValue, setACValue] = useState<string>('');
  // eslint-disable-next-line no-unused-vars
  const [dcValue, setDCValue] = useState<string>('');
  const [acData, setACData] = useState<{ x: string; y: number }[]>([]);
  const [dcData, setDCData] = useState<{ x: string; y: number }[]>([]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const koreaTime = (timestamp: number) => {
    const koreaTime = new Date(timestamp + 1 * 60 * 60);
    return koreaTime.toLocaleString(); // Format the date into a string
  };
  const fetchData = () => {
    axios
      .get('http://localhost:3000/mqtt/getdata')
      .then((response) => {
        const receivedData = response.data;
        // console.log(receivedData);
        const acRawValue = receivedData[0]?.data.data[0]?.AC || '0.00V';
        setACValue(acRawValue);
        setACColor(acRawValue === '0.00V' ? 'red' : 'blue');

        const dcRawValue = receivedData[0]?.data.data[0]?.DC || '0.00V';
        setDCValue(dcRawValue);
        setDCColor(dcRawValue === '0.00V' ? 'red' : 'blue');

        const timestamp = Date.now();
        const koreaTimestamp = koreaTime(timestamp); // Converted to string

        // New data with string type for x
        const newACData = { x: koreaTimestamp, y: parseFloat(acRawValue) };
        const newDCData = { x: koreaTimestamp, y: parseFloat(dcRawValue) };

        // Update state with the new data
        setACData((prevData) => {
          if (prevData.length < 3) {
            // If less than 3 data points, append the new data
            return [...prevData, newACData];
          } else {
            // If 3 data points already, remove the oldest data point and append the new one
            return [...prevData.slice(1), newACData];
          }
        });

        setDCData((prevData) => {
          if (prevData.length < 3) {
            // If less than 3 data points, append the new data
            return [...prevData, newDCData];
          } else {
            // If 3 data points already, remove the oldest data point and append the new one
            return [...prevData.slice(1), newDCData];
          }
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const data = [
    {
      id: 'AC',
      color: 'blue',
      data: acData.map((point) => ({ x: point.x, y: point.y })),
    },
    {
      id: 'DC',
      color: 'green',
      data: dcData.map((point) => ({ x: point.x, y: point.y })),
    },
  ];

  return (
    <div>
      {/* <div style={{ display: 'flex', marginLeft: '10px' }}>
        <div style={{ marginLeft: '10px' }}>
          AC:
          <div style={{ backgroundColor: acColor, width: '50px', height: '10px' }}>
            <div style={{ ...getTextStyle(acColor), ...{ color: 'white' } }}>{acValue === '0.00V' ? '' : ''}</div>
          </div>
          {acValue}
        </div>
        <div style={{ marginLeft: '10px' }}>
          DC:
          
          <div style={{ backgroundColor: dcColor, width: '50px', height: '10px' }}>
            <div style={{ ...getTextStyle(dcColor), ...{ color: 'white' } }}>{dcValue === '0.00V' ? '' : ''}</div>
          </div>
          {dcValue}
        </div>
      </div> */}

      <div style={{ width: '700px', height: '250px', marginTop: '20px' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 110, bottom: 40, left: 60 }}
          xScale={{
            type: 'point',
          }}
          axisLeft={{
            tickSize: 1,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Voltage',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          enableGridX={false}
          pointSize={1}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={5}
          enablePointLabel={true}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          enableSlices="x"
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

// const getTextStyle = (color: string): React.CSSProperties => ({
//   textAlign: 'center',
//   marginTop: '5px',
//   fontWeight: 'bold',
//   color: color,
// });

export default Home;
