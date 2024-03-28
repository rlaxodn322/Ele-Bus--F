import React, { useState } from 'react';
import styled from '@emotion/styled';
import { signUpAPI } from '../apis/mail/mail';
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
const EmailForm = ({ placeholder, onSuccess }: { onSuccess: () => void; placeholder: any }) => {
  const [email, setEmail] = useState('taewoo@firstcorea.com');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      // signUpAPI를 사용하여 요청 보내기
      const data = { email, message };
      const response = await signUpAPI(data); // signUpAPI를 사용하여 요청 보내기

      if (response) {
        alert('이메일이 성공적으로 전송되었습니다.');
        onSuccess();
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
        <Label>{placeholder}</Label>
        <TextArea placeholder={placeholder} value={message} onChange={(e) => setMessage(e.target.value)} required />
      </FormGroup>
      <Button type="submit">보내기</Button>
    </FormContainer>
  );
};

export default EmailForm;
