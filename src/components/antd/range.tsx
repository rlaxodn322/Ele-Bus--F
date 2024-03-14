import React, { useState } from 'react';
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

interface RangeProps {
  buses: { id: string; carNumber: string }[]; // buses의 타입 지정
  // eslint-disable-next-line no-unused-vars
  onSelectCarNumber: (carNumber: string | null) => void; // onSelectCarNumber의 타입 지정
}

const Range: React.FC<RangeProps> = ({ buses, onSelectCarNumber }) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedBusId, setSelectedBusId] = useState<string | null>(null); // 선택된 버스 ID의 타입 지정

  const onFinish = (values: {
    Select: string; // Select의 타입 지정
    // eslint-disable-next-line no-unused-vars
    RangePicker: { format: (arg0: string) => any }[];
  }) => {
    const selectedBus = buses.find((bus) => bus.id === values.Select);
    const busLabel = selectedBus ? selectedBus.carNumber : '';
    console.log(`Bus number: ${busLabel}`);
    console.log(`Date : ${values.RangePicker[0].format('YYYY-MM-DD')} - ${values.RangePicker[1].format('YYYY-MM-DD')}`);
    // 선택된 차량 번호를 부모 컴포넌트로 전달
    onSelectCarNumber(busLabel);
    // 선택된 차량 ID 저장
    setSelectedBusId(values.Select);
  };

  const handleViewAll = () => {
    // "전체 보기" 버튼 클릭 시 선택된 차량 ID 초기화
    setSelectedBusId(null);
    // 선택된 차량 번호를 부모 컴포넌트로 전달 (null로 설정하여 전체를 의미함)
    onSelectCarNumber(null);
  };

  return (
    <Form style={{ maxWidth: 600 }} {...formItemLayout} onFinish={onFinish}>
      <Form.Item label="Bus" name="Select" rules={[{ required: true, message: '필수 입력 항목입니다!' }]}>
        <Select>
          {buses.map((bus) => (
            <Select.Option key={bus.id} value={bus.id}>
              {bus.carNumber}
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
        <Button onClick={handleViewAll} style={{ marginLeft: 10 }}>
          전체 보기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Range;
