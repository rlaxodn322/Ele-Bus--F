import React from 'react';
import { Form, Input, Button } from 'antd';
import { signUpAPI } from '../../components/apis/item/item';
const { Item } = Form;
interface InputProps {
  title?: string;
  placeholders: string[];
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: any) => void;
  onCancel: () => void;
}

const NewItem: React.FC<InputProps> = ({ title, onCancel }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      // 차량 등록 API 호출
      await signUpAPI(values);

      // 등록 후 Modal 닫기
      onCancel();
      console.log(values);
      form.resetFields(); // 입력값 초기화
    } catch (error) {
      console.error('아이템 등록 오류:', error);
      // 오류 처리 로직 추가
    }
  };
  return (
    <>
      <div className="input-container">
        <h1>{title}</h1>
        <Form form={form} onFinish={onFinish}>
          <Item label="부품번호" name="number" rules={[{ required: true, message: '부품 번호를 입력해주세요.' }]}>
            <Input placeholder="부품 번호 입력" />
          </Item>
          <Item label="담당이름" name="name" rules={[{ required: true, message: '담당자 이름를 입력해주세요.' }]}>
            <Input placeholder="담당자 이름 입력" />
          </Item>
          <Item label="등록일자" name="date" rules={[{ required: true, message: '등록일자를 입력해주세요.' }]}>
            <Input placeholder="등록일자 입력" />
          </Item>
          <Item label="기타사항" name="memo" rules={[{ required: true, message: '기타 사항를 입력해주세요.' }]}>
            <Input placeholder="기타 사항 입력" />
          </Item>
          <Item label="버스상태" name="status" rules={[{ required: true, message: '상태를 입력해주세요.' }]}>
            <Input placeholder="상태 입력" />
          </Item>
          <Form.Item>
            <div style={{ marginTop: '-40px', display: 'flex', justifyContent: 'center' }}>
              <Button type="primary" htmlType="submit" style={{ marginTop: '10px', marginRight: '10px' }}>
                입력
              </Button>
              <Button onClick={onCancel} style={{ marginTop: '10px' }}>
                취소
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default NewItem;
