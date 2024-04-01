import React from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
// import axios from 'axios';
import { updateUserAPI } from '../apis/user/user';
interface EditModalProps {
  open: boolean;
  onCancel: () => void; // onCancel 콜백 함수는 인자를 받지 않음
  user: { name: string; email: string; phone: string; company: string }; // 사용자 정보의 형식에 따라 수정
}
const EditModal: React.FC<EditModalProps> = ({ open, onCancel, user }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      // 여기에서 updateUserAPI 함수를 호출하여 수정 정보를 서버로 보냅니다.
      await updateUserAPI({ email: user.email, ...values });

      message.success('수정이 완료되었습니다.');
      onCancel(); // 수정 완료 후 모달 닫기
    } catch (error) {
      message.error('수정 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    form.resetFields(); // Form 데이터 초기화
    onCancel(); // 모달 닫기
  };

  return (
    <Modal title="정보 수정" open={open} onCancel={handleCancel} footer={null}>
      <Form form={form} onFinish={onFinish} initialValues={user}>
        <Form.Item label="이름" name="name" rules={[{ required: true, message: '이름을 입력하세요.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="연락처" name="phone" rules={[{ required: true, message: '연락처를 입력하세요.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="회사명" name="company" rules={[{ required: true, message: '회사명을 입력하세요.' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="이메일" name="email" rules={[{ required: true, message: '이메일을 입력하세요.' }]}>
          <Input disabled />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          수정 완료
        </Button>
      </Form>
    </Modal>
  );
};

export default EditModal;
