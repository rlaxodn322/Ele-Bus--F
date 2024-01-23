import React, { useState } from 'react';
import { Select } from 'antd';

const OPTIONS = ['123호1234', '123호1123', '123호4212', '123호1532'];

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      placeholder="버스검색"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '10%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};

export default App;
