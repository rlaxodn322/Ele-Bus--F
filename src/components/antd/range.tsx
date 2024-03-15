import React, { useState } from 'react';
import { Button, Form, Select } from 'antd';
import { Dayjs } from 'dayjs'; // dayjs 가져오기

// const { RangePicker } = DatePicker;

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
  buses: { id: number; companyNumber: string; day: string; carNumber: string; carinfo: string }[];
  // eslint-disable-next-line no-unused-vars
  onSelectCarNumber: (carNumber: string | null) => void;
}

const Range: React.FC<RangeProps> = ({ buses, onSelectCarNumber }) => {
  const [selectedBusId, setSelectedBusId] = useState<number | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedDateRange, setSelectedDateRange] = useState<[Dayjs, Dayjs] | null>(null);
  const [filteredBuses, setFilteredBuses] = useState<
    { id: number; companyNumber: string; day: string; carNumber: string; carinfo: string }[]
  >([]);

  const onFinish = () => {
    const selectedBus = buses.find((bus) => bus.id === selectedBusId);
    const busLabel = selectedBus ? selectedBus.carNumber : '';
    console.log(`Bus number: ${busLabel}`);

    // 선택된 차량 번호를 부모 컴포넌트로 전달
    onSelectCarNumber(busLabel);
  };

  const handleViewAll = () => {
    // "전체 보기" 버튼 클릭 시 선택된 차량 ID 및 날짜 범위 초기화
    setSelectedBusId(null);
    setSelectedDateRange(null);
    // 선택된 차량 번호를 부모 컴포넌트로 전달 (null로 설정하여 전체를 의미함)
    onSelectCarNumber(null);
    setFilteredBuses([]);
  };

  // // 선택된 날짜 범위에 해당하는 버스를 필터링하여 설정
  // const filterBusesByDateRange = (startDate: Dayjs, endDate: Dayjs) => {
  //   const filteredBuses = buses.filter((bus) => {
  //     const busDate = dayjs(bus.day, 'YYYY-MM-DD'); // Parse the date with the correct format
  //     return busDate.isAfter(startDate.subtract(1, 'day')) && busDate.isBefore(endDate.add(1, 'day'));
  //   });
  //   setFilteredBuses(filteredBuses);
  // };

  return (
    <Form style={{ maxWidth: 400, marginBottom: '10px' }} {...formItemLayout} onFinish={onFinish}>
      <Form.Item label="Bus">
        <Select allowClear onChange={(value) => setSelectedBusId(value)}>
          {buses.map((bus) => (
            <Select.Option key={bus.id} value={bus.id}>
              {bus.carNumber}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* 
      <Form.Item label="Date">
        <RangePicker
          onChange={(dates) => {
            setSelectedDateRange(dates ? [dates[0] || dayjs(), dates[1] || dayjs()] : null);
            if (dates) filterBusesByDateRange(dates[0], dates[1]);
            else setFilteredBuses([]);
          }}
        />
      </Form.Item> */}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="primary" htmlType="submit">
          검색
        </Button>
        <Button onClick={handleViewAll} style={{ marginLeft: 10 }}>
          전체 보기
        </Button>
      </div>

      {/* 필터링된 버스 목록 출력 */}
      {filteredBuses.length > 0 && (
        <div>
          <h3>Selected Buses:</h3>
          <ul>
            {filteredBuses.map((bus) => (
              <li key={bus.id}>{bus.carNumber}</li>
            ))}
          </ul>
        </div>
      )}
    </Form>
  );
};

export default Range;
