import React from 'react';
import { Card, Space } from 'antd';
import Link from 'next/link'; // 추가

const App: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Card title="Default size card" extra={<Link href="#">More</Link>} style={{ width: 600 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

export default App;
