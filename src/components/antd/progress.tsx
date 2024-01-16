import React from 'react';
import { Progress, Tooltip, Space } from 'antd';

interface CustomProgressProps {
  percent: number;
  size?: number;
  type?: 'line' | 'circle' | 'dashboard';
  strokeWidth?: number;
  showInfo?: boolean;
  // IntrinsicAttributes와 충돌하지 않도록 추가
  [key: string]: any;
}

const CustomProgress: React.FC<CustomProgressProps> = ({
  percent,
  size = 120,
  type = 'circle',
  strokeWidth = 8,
  showInfo = true,
  ...restProps
}) => (
  <Space wrap>
    <Tooltip title={`${percent}%`}>
      <Progress
        size={size}
        percent={percent}
        type={type}
        strokeWidth={strokeWidth}
        showInfo={showInfo}
        {...restProps}
      />
    </Tooltip>
  </Space>
);

export default CustomProgress;
