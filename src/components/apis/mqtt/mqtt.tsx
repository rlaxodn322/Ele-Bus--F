import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XYPlot, LineSeries, XAxis, YAxis, HorizontalGridLines, VerticalGridLines } from 'react-vis';

interface Item {
  data: {
    data: {
      AC: string;
      DC: string;
    }[];
  };
}

const Home = () => {
  const [acColor, setACColor] = useState<string>('red');
  const [dcColor, setDCColor] = useState<string>('red');
  const [acValue, setACValue] = useState<string>('');
  const [dcValue, setDCValue] = useState<string>('');
  const [data, setData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // 초기 데이터 로딩
    fetchData();

    // 1분마다 데이터 갱신
    const intervalId = setInterval(fetchData, 60000); // 1분에 한 번씩

    // 컴포넌트 언마운트 시 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    axios
      .get<Item[]>('http://localhost:3000/mqtt/getdata')
      .then((response) => {
        const receivedData = response.data;
        console.log(receivedData);
        // AC 값 및 색상 업데이트
        const acRawValue = receivedData[0]?.data.data[0]?.AC || '0.00V';
        setACValue(acRawValue);
        setACColor(acRawValue === '0.00V' ? 'red' : 'blue');

        // DC 값 및 색상 업데이트
        const dcRawValue = receivedData[0]?.data.data[0]?.DC || '0.00V';
        setDCValue(dcRawValue);
        setDCColor(dcRawValue === '0.00V' ? 'red' : 'blue');

        // 그래프 데이터 업데이트
        const newDataPoint = { x: Date.now(), y: parseFloat(acRawValue) }; // AC 값을 그래프 데이터로 사용
        setData((prevData) => [...prevData, newDataPoint]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

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
      {/* 그래프 */}
      <div style={{ marginTop: '20px' }}>
        <XYPlot width={500} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Time" />
          <YAxis title="AC Value" />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    </div>
  );
};

export default Home;

const getTextStyle = (color: string): React.CSSProperties => ({
  textAlign: 'center',
  marginTop: '5px',
  fontWeight: 'bold',
  color: color,
});
