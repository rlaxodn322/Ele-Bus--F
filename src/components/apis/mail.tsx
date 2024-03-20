import React, { useState } from 'react';
import styled from '@emotion/styled';

// 스타일드 컴포넌트를 사용하여 스타일링
const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const EmailForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState('taewoo@firstcorea.com');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 이메일과 메시지를 서버로 전송하는 API 호출
    try {
      //const response = await fetch('http://localhost:3000/mail', {
      const response = await fetch('http://ele.firstcorea:3000/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        alert('이메일이 성공적으로 전송되었습니다.');
        onSuccess(); // 이메일 전송 성공 시 onSuccess 이벤트 호출
        setMessage('');
      } else {
        alert('이메일 전송에 실패했습니다.');
      }
    } catch (error) {
      console.error('이메일 전송 중 오류 발생:', error);
      alert('이메일 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label>관리자 이메일:</Label>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label>메시지:</Label>
        <TextArea
          placeholder="회사명, 권한상향 이유를 입력해주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </FormGroup>
      <Button type="submit">보내기</Button>
    </FormContainer>
  );
};

export default EmailForm;
