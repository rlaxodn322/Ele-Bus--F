// CustomProgress.tsx
import React from 'react';
import { Progress, Tooltip, Space } from 'antd';

interface CustomProgressProps {
  percent: number;
  size?: number;
  type?: 'line' | 'circle' | 'dashboard';
  strokeWidth?: number;
  showInfo?: boolean;
  // strokeColor 추가
  strokeColor?: string | Record<string, string>;
  [key: string]: any;
}

const CustomProgress: React.FC<CustomProgressProps> = ({
  percent,
  size = 120,
  type = 'circle',
  strokeWidth = 8,
  showInfo = true,
  strokeColor, // strokeColor prop 추가
  ...restProps
}) => (
  <Space wrap>
    <Tooltip title={`${percent}%`}>
      {/* strokeColor prop 적용 */}
      <Progress
        size={size}
        percent={percent}
        type={type}
        strokeWidth={strokeWidth}
        showInfo={showInfo}
        strokeColor={strokeColor}
        {...restProps}
      />
    </Tooltip>
  </Space>
);

export default CustomProgress;
