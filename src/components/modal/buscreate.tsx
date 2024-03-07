// components/modal/BusCreate.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { signUpAPI } from '../../components/apis/bus/bus';

const { Item } = Form;

// 프롭 타입 정의
type BusCreateProps = {
  open: boolean; // visible 대신 open으로 수정
  onCancel: () => void;
};

const BusCreate: React.FC<BusCreateProps> = ({ open, onCancel }) => {
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
      console.error('차량 등록 오류:', error);
      // 오류 처리 로직 추가
    }
  };

  return (
    // BusCreate 컴포넌트 내부
    <Modal title="버스 등록" open={open} onCancel={onCancel} footer={null}>
      {/* 등록 폼 */}
      <Form form={form} onFinish={handleCarRegistration}>
        <Item
          label="사업자번호"
          name="companyNumber"
          rules={[{ required: true, message: '사업자번호를 입력해주세요.' }]}
        >
          <Input placeholder="사업자번호 입력" />
        </Item>
        <Item label="등록일" name="day" rules={[{ required: true, message: '등록일을 입력해주세요.' }]}>
          <Input placeholder="등록일 입력" />
        </Item>
        <Item label="차량번호" name="carNumber" rules={[{ required: true, message: '차량번호를 입력해주세요.' }]}>
          <Input placeholder="차량번호 입력" />
        </Item>
        <Item label="차대번호" name="carinfo" rules={[{ required: true, message: '차대번호를 입력해주세요.' }]}>
          <Input placeholder="차대번호 입력" />
        </Item>
        <Item label="모델번호" name="carmodel" rules={[{ required: true, message: '모델번호를 입력해주세요.' }]}>
          <Input placeholder="모델번호 입력" />
        </Item>
        <Item label="노선번호" name="routeNumber" rules={[{ required: true, message: '노선번호를 입력해주세요.' }]}>
          <Input placeholder="노선번호 입력" />
        </Item>
        <Item label="모델번호" name="model" rules={[{ required: true, message: '모델번호를 입력해주세요.' }]}>
          <Input placeholder="모델번호 입력" />
        </Item>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form>
    </Modal>
  );
};

export default BusCreate;
