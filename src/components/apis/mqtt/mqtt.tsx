import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Item {
  data: {
    data: {
      AC: string;
      DC: string;
    }[];
  };
}

const Home = () => {
  const [data, setData] = useState<Item[]>([]);
  const [acColor, setACColor] = useState<string>('red');
  const [dcColor, setDCColor] = useState<string>('red');
  const [acValue, setACValue] = useState<string>('');
  const [dcValue, setDCValue] = useState<string>('');

  useEffect(() => {
    // 초기 데이터 로딩
    fetchData();

    // 5초마다 데이터 갱신
    const intervalId = setInterval(fetchData, 5000);

    // 컴포넌트 언마운트 시 clearInterval 호출하여 메모리 누수 방지
    return () => clearInterval(intervalId);
  }, []);

  const fetchData = () => {
    axios
      .get<Item[]>('http://localhost:3000/mqtt/getdata')
      .then((response) => {
        const receivedData = response.data;
        setData(receivedData);

        // AC 값 및 색상 업데이트
        const acRawValue = receivedData[0]?.data.data[0]?.AC || '0.00V';
        setACValue(acRawValue);
        setACColor(acRawValue === '0.00V' ? 'red' : 'blue');

        // DC 값 및 색상 업데이트
        const dcRawValue = receivedData[0]?.data.data[0]?.DC || '0.00V';
        setDCValue(dcRawValue);
        setDCColor(dcRawValue === '0.00V' ? 'red' : 'blue');
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <ul>
        <li>
          AC:
          <div style={{ backgroundColor: acColor, width: '50px', height: '50px' }}>
            <div style={{ ...getTextStyle(acColor), ...{ color: 'white' } }}>
              {acValue === '0.00V' ? '꺼짐' : '켜짐'}
            </div>
          </div>
          {acValue}
        </li>
        <li>
          DC:
          <div style={{ backgroundColor: dcColor, width: '50px', height: '50px' }}>
            <div style={{ ...getTextStyle(dcColor), ...{ color: 'white' } }}>
              {dcValue === '0.00V' ? '꺼짐' : '켜짐'}
            </div>
          </div>
          {dcValue}
        </li>
      </ul>
    </div>
  );
};

export default Home;

const getTextStyle = (color: string) => ({
  textAlign: 'center',
  marginTop: '5px',
  fontWeight: 'bold',
  color: color,
});
