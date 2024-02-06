import React from 'react';
import { DatePicker, Space } from 'antd';
import type { GetProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker disabledDate={disabledDate} />
  </Space>
);

export default App;
