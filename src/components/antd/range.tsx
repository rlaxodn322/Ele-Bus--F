import React from 'react';
import { Button, DatePicker, Form, Select } from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const BusDummyData = [
  { label: '123호1234', value: 'bus1' },
  { label: '321호1234', value: 'bus2' },
  // Add more dummy data as needed
];

const App: React.FC = () => {
  const onFinish = (values: any) => {
    const busLabel = BusDummyData.find((bus) => bus.value === values.Select)?.label;
    console.log(`Bus number: ${busLabel}`);
    console.log(`Date : ${values.RangePicker[0].format('YYYY-MM-DD')} - ${values.RangePicker[1].format('YYYY-MM-DD')}`);
    // 여기서 필요한 추가 작업을 수행할 수 있습니다.
  };

  return (
    <Form style={{ maxWidth: 600 }} {...formItemLayout} onFinish={onFinish}>
      <Form.Item label="Bus" name="Select" rules={[{ required: true, message: '필수 입력 항목입니다!' }]}>
        <Select>
          {BusDummyData.map((bus) => (
            <Select.Option key={bus.value} value={bus.value}>
              {bus.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Date" name="RangePicker" rules={[{ required: true, message: '필수 입력 항목입니다!' }]}>
        <RangePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 17, span: 16 }}>
        <Button type="primary" htmlType="submit">
          입력
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
