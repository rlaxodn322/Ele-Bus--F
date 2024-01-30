import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface AntdTableProps {
  columns: ColumnsType<any>;
  data: any[];
  tableWidth: number | string;
  tableHeight: number | string;
}

const AntdTable: React.FC<AntdTableProps> = ({ columns, data, tableWidth, tableHeight }) => {
  return <Table columns={columns} dataSource={data} scroll={{ x: tableWidth, y: tableHeight }} pagination={false} />;
};

export default AntdTable;
