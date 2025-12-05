import {Button, Space} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";

export const productColumns = [
  {
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
  },
  {
    title: 'Qty',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button
          icon={<EyeOutlined/>}
          onClick={() => {}}
        />
        <Button
          icon={<EditOutlined style={{color: "blue"}}/>}
          onClick={() => {}}
        />
        <Button
          icon={<DeleteOutlined style={{color: "red"}}/>}
          onClick={() => {}}
        />
      </Space>
    ),
  },
];
