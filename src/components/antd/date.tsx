// Date 컴포넌트
import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface DateProps {
  // eslint-disable-next-line no-unused-vars
  onDateChange: (start: string | null, end: string | null) => void;
}

const Date: React.FC<DateProps> = ({ onDateChange }) => {
  const handleDateChange = (dates: any, dateStrings: [string, string]) => {
    onDateChange(dateStrings[0], dateStrings[1]);
  };

  return <RangePicker onChange={handleDateChange} />;
};

export default Date;
