import React from 'react';
import { Table, ColumnsType } from 'antd';

interface AntdTableProps {
  columns: ColumnsType<any>; // 컬럼 데이터의 실제 유형에 맞게 'any'를 조정하세요.
  data: any[]; // 데이터의 실제 유형에 맞게 'any'를 조정하세요.
  tableWidth: number | string;
  tableHeight: number | string;
}

const AntdTable: React.FC<AntdTableProps> = ({ columns, data, tableWidth, tableHeight }) => {
  return <Table columns={columns} dataSource={data} scroll={{ x: tableWidth, y: tableHeight }} pagination={false} />;
};

export default AntdTable;
