import React from 'react';
import { Progress, Tooltip, Space } from 'antd';

const App: React.FC = () => (
  <>
    <Space wrap>
      <Tooltip title="50%">
        <Progress size={160} percent={50} success={{ percent: 0 }} type="circle" />
      </Tooltip>
    </Space>
  </>
);

export default App;
