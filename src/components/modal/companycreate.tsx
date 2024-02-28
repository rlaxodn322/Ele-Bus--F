// components/modal/BusCreate.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { signUpAPI } from '../apis/company/company';

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
      console.error('사업자 등록 오류:', error);
      // 오류 처리 로직 추가
    }
  };

  return (
    // BusCreate 컴포넌트 내부
    <Modal title="사업자 등록" open={open} onCancel={onCancel} footer={null}>
      {/* 등록 폼 */}
      <Form form={form} onFinish={handleCarRegistration}>
        <Item
          label="사업자 번호"
          name="companynumber"
          rules={[{ required: true, message: '사업자 번호를 입력해주세요.' }]}
        >
          <Input placeholder="사업자 번호 입력" />
        </Item>
        <Item label="사업자명" name="company" rules={[{ required: true, message: '사업자명을 입력해주세요.' }]}>
          <Input placeholder="사업자 번호 입력" />
        </Item>
        <Item
          label="사업자 주소"
          name="companylocation"
          rules={[{ required: true, message: '사업자 주소를 입력해주세요.' }]}
        >
          <Input placeholder="사업자 주소 입력" />
        </Item>
        <Item
          label="사업자 대표"
          name="companyname"
          rules={[{ required: true, message: '사업자 대표를 입력해주세요.' }]}
        >
          <Input placeholder="사업자 대표 입력" />
        </Item>
        <Item label="등록일" name="day" rules={[{ required: true, message: '등록일을 입력해주세요.' }]}>
          <Input placeholder="등록일 입력" />
        </Item>

        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form>
    </Modal>
  );
};

export default BusCreate;
