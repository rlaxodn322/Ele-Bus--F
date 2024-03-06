// components/modal/BusCreate.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { signUpAPI } from '../apis/event/event';

const { Item } = Form;

// 프롭 타입 정의
type EventCreateProps = {
  open: boolean; // visible 대신 open으로 수정
  onCancel: () => void;
};

const Event: React.FC<EventCreateProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();

  const handleCarRegistration = async (values: any) => {
    try {
      // 차량 등록 API 호출
      await signUpAPI(values);

      // 등록 후 Modal 닫기
      onCancel();
      console.log(values);
      form.resetFields(); // 입력값 초기화
    } catch (error) {
      console.error('정비이력 등록 오류:', error);
      // 오류 처리 로직 추가
    }
  };

  return (
    // BusCreate 컴포넌트 내부
    <Modal title="정비이력 등록" open={open} onCancel={onCancel} footer={null}>
      {/* 등록 폼 */}
      <Form form={form} onFinish={handleCarRegistration}>
        <Item label="사업자" name="companynumber" rules={[{ required: true, message: '사업자 번호를 입력해주세요.' }]}>
          <Input placeholder="사업자 번호 입력" />
        </Item>
        <Item label="버스" name="busnum" rules={[{ required: true, message: '버스번호를 입력해주세요.' }]}>
          <Input placeholder="버스번호 입력" />
        </Item>
        <Item label="날짜" name="day" rules={[{ required: true, message: '날짜를 입력해주세요.' }]}>
          <Input placeholder="날짜 입력" />
        </Item>
        <Item label="정비 내용" name="detail" rules={[{ required: true, message: '정비 이력를 입력해주세요.' }]}>
          <Input placeholder="정비이력 입력" />
        </Item>
        <Item label="비고" name="status" rules={[{ message: '비고' }]}>
          <Input placeholder="비고" />
        </Item>

        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form>
    </Modal>
  );
};

export default Event;
