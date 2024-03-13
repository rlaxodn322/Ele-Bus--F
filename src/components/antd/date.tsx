// Date 컴포넌트
import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface DateProps {
  // eslint-disable-next-line no-unused-vars
  onDateChange: (start: string | null, end: string | null) => void;
  size?: 'large' | 'middle' | 'small'; // 추가: size prop 정의
}

const Date: React.FC<DateProps> = ({ onDateChange, size = 'middle' }) => {
  const handleDateChange = (dates: any, dateStrings: [string, string]) => {
    onDateChange(dateStrings[0], dateStrings[1]);
  };

  return <RangePicker size={size} onChange={handleDateChange} />;
};

export default Date;
