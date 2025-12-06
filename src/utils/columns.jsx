import { Button, Space, Tag } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";

export const productColumns = [
  {
    title: "SKU",
    dataIndex: "skuNumber",
    key: "skuNumber",
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Unit",
    dataIndex: "unit",
    key: "unit",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<EyeOutlined />} onClick={() => {}} />
        <Button
          icon={<EditOutlined style={{ color: "blue" }} />}
          onClick={() => {}}
        />
        <Button
          icon={<DeleteOutlined style={{ color: "red" }} />}
          onClick={() => {}}
        />
      </Space>
    ),
  },
];

export const categoryColumns = [
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Created on",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (value) => new Date(value).toLocaleDateString(),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          icon={<EditOutlined style={{ color: "blue" }} />}
          onClick={() => {}}
        />
        <Button
          icon={<DeleteOutlined style={{ color: "red" }} />}
          onClick={() => {}}
        />
      </Space>
    ),
  },
];
