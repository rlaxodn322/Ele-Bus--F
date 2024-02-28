// InputButton.tsx
import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface InputButtonProps {
  a?: string; // 'a' 속성을 선택적으로 받도록 변경
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void; // 검색어 변경 시 부모 컴포넌트에 알리기 위한 콜백 함수
}

const InputButton: React.FC<InputButtonProps> = ({ a, onChange, name }) => {
  const [searchInput, setSearchInput] = useState<string>('');

  // eslint-disable-next-line no-unused-vars
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    // 검색 버튼을 눌렀을 때, 검색어를 부모 컴포넌트에 전달
    onChange(searchInput);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>{a}</h1>
        <Input
          placeholder={name}
          style={{ width: '300px', marginBottom: '30px' }}
          value={searchInput}
          onChange={handleInputChange}
        />
        <Button onClick={handleSearch}>🔍</Button>
      </div>
    </>
  );
};

export default InputButton;
