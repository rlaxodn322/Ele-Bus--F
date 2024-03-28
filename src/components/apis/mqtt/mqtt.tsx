import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveLine } from '@nivo/line';

const Home = () => {
  const [acColor, setACColor] = useState<string>('red');
  const [dcColor, setDCColor] = useState<string>('red');
  const [acValue, setACValue] = useState<string>('');
  const [dcValue, setDCValue] = useState<string>('');
  const [acData, setACData] = useState<{ x: number; y: number }[]>([]);
  const [dcData, setDCData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 50000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get('http://localhost:3000/mqtt/getdata')
      .then((response) => {
        const receivedData = response.data;
        console.log(receivedData);
        const acRawValue = receivedData[0]?.data.data[0]?.AC || '0.00V';
        setACValue(acRawValue);
        setACColor(acRawValue === '0.00V' ? 'red' : 'blue');

        const dcRawValue = receivedData[0]?.data.data[0]?.DC || '0.00V';
        setDCValue(dcRawValue);
        setDCColor(dcRawValue === '0.00V' ? 'red' : 'blue');

        const timestamp = Date.now();
        const koreaTimestamp = new Date(timestamp + 9 * 60 * 60 * 1000);

        // 새로운 데이터 추가
        const newACData = { x: koreaTimestamp.getTime(), y: parseFloat(acRawValue) };
        const newDCData = { x: koreaTimestamp.getTime(), y: parseFloat(dcRawValue) };

        // 최신 5개의 데이터만 유지
        setACData((prevData) => [...prevData.slice(-10), newACData]);
        setDCData((prevData) => [...prevData.slice(-10), newDCData]);
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
      <div style={{ display: 'flex', marginLeft: '10px' }}>
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
      </div>

      <div style={{ width: '1000px', height: '500px', marginTop: '20px' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 110, bottom: 40, left: 60 }}
          xScale={{
            type: 'point',
          }}
          axisLeft={{
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Voltage',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          pointSize={1}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
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

const getTextStyle = (color: string): React.CSSProperties => ({
  textAlign: 'center',
  marginTop: '5px',
  fontWeight: 'bold',
  color: color,
});

export default Home;
