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

  //   useEffect(() => {
  //     // 초기 데이터 로딩
  //     fetchData();

  //     // 5초마다 데이터 갱신
  //     const intervalId = setInterval(fetchData, 5000);

  //     // 컴포넌트 언마운트 시 clearInterval 호출하여 메모리 누수 방지
  //     return () => clearInterval(intervalId);
  //   }, []);

  //   const fetchData = () => {
  //     axios
  //       .get<Item[]>('http://localhost:3000/mqtt/getdata')
  //       .then((response) => setData(response.data))
  //       .catch((error) => console.error('Error fetching data:', error));
  //   };

  return (
    <div>
      <h1>DynamoDB Data Visualization</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            AC: {item.data.data[0]?.AC}, DC: {item.data.data[0]?.DC}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
