// import React from 'react';
// import { Modal, Form, Input, Button } from 'antd';

// interface NewBusModalProps {
//   open: boolean;
//   onClose: () => void;
//   // onOk: (values: { busNumber: string; routeNumber: string }) => void;
// }

// const NewBusModal: React.FC<NewBusModalProps> = ({ open, onClose, onOk }) => {
//   // const [form] = Form.useForm();

//   // const onFinish = (values: { busNumber: string; routeNumber: string }) => {
//   //   // 사용하지 않는 변수이지만, Form의 resetFields 메서드를 호출하기 위해 선언
//   //   form.resetFields();
//   // };

//   // return (
//   //   <Modal title="신규 버스 등록" visible={open} onOk={onClose} onCancel={onClose} footer={null}>
//   //     <Form form={form} onFinish={onFinish}>
//   //       <Form.Item label="버스 번호" name="busNumber" rules={[{ required: true, message: '버스 번호를 입력하세요' }]}>
//   //         <Input />
//   //       </Form.Item>
//   //       <Form.Item label="노선 번호" name="routeNumber" rules={[{ required: true, message: '노선 번호를 입력하세요' }]}>
//   //         <Input />
//   //       </Form.Item>
//   //       {/* 추가 필드들 */}
//   //       <Form.Item>
//   //         <Button type="primary" htmlType="submit">
//   //           등록
//   //         </Button>
//   //         <Button onClick={onClose}>취소</Button>
//   //       </Form.Item>
//   //     </Form>
//   //   </Modal>
//   );
// };

// export default NewBusModal;
