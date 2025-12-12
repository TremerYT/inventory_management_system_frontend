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

export const salesColumns = [
  {
    title: "Customer",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Reference Number",
    dataIndex: "referenceNumber",
    key: "referenceNumber",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (value) => new Date(value).toLocaleDateString(),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Completed" ? "green" : "volcano"}>{status}</Tag>
    ),
  },
  {
    title: "Grand Total",
    dataIndex: "grandTotal",
    key: "grandTotal",
    render: (value) => `ksh${(value || 0).toFixed(2)}`
  },
  {
    title: "Paid",
    dataIndex: "paid",
    key: "Paid",
    render: (value) => `ksh${(value || 0).toFixed(2)}`
  },
  {
    title: "Amount Due",
    dataIndex: "due",
    key: "due",
    render: (_, record) => {
      const due = record.grandTotal - record.paid;
      return `ksh${(due || 0).toFixed(2)}`;
    },
  },
  {
  title: "Payment Status",
  dataIndex: "paymentStatus",
  key: "paymentStatus",
  render: (status) => {
    let color;

    switch (status.toLowerCase()) {
      case "paid":
        color = "green";
        break;
      case "overdue":
        color = "gold";
        break;
      case "unpaid":
        color = "volcano";
        break;
      default:
        color = "default";
    }
    const displayStatus = status.charAt(0).toUpperCase() + status.slice(1);

    return <Tag color={color}>{displayStatus}</Tag>;
  },
},

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button
          icon={<EyeOutlined style={{ color: "blue" }} />}
          onClick={() => {}}
        />
        <Button
          icon={<DeleteOutlined style={{ color: "red" }} />}
          onClick={() => {}}
        />
      </Space>
    ),
  },
]
