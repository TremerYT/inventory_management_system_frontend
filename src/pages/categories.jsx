import { useState } from "react";
import { status } from "../utils/select_items";
import { Button, Card, Input, Select, Table } from "antd";
import {
  FileExcelFilled,
  FilePdfFilled,
  PlusOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { categoryColumns } from "../utils/columns";
import {useFilter} from "../hooks/useFilter.js";
import {mockCategories} from "../mock/mock_data.jsx";
import AddCategory from "../components/modal/add_category.jsx";

const Categories = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {
    searchText,
    filteredData,
    handleSearch,
    handleSelect,
  } = useFilter(mockCategories, {
    searchFields: ["category"],
    selectFields: ["status"],
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => {
      setSelectedRowKeys(newSelectedKeys);
    },
  };

  const handleOk = (values) => {
    console.log("Form Submited:", values);
		setIsOpen(false);
  }

   const handleCancel = () => {
		setIsOpen(false);
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl">Category List</h2>
          <p>Manage your categories</p>
        </div>
        <div className="flex gap-3">
          <Button
            type="text"
            icon={<FilePdfFilled style={{ fontSize: 20, color: "red" }} />}
            onClick={() => {}}
          />
          <Button
            type="text"
            icon={<FileExcelFilled style={{ fontSize: 20, color: "green" }} />}
            onClick={() => {}}
          />
          <Button
            type="text"
            icon={<ReloadOutlined style={{ fontSize: 20 }} />}
            onClick={() => {}}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsOpen(true)}>
            Add Category
          </Button>
        </div>
      </div>

      <Card
        title={
          <Input.Search
            value={searchText}
            onChange={handleSearch}
            className="!w-1/4"
          />
        }
        extra={
          <Select
            defaultValue="Status"
            options={status}
            onSelect={(value) => handleSelect("status", value)}
          />
        }
      >
        <Table
          rowSelection={rowSelection}
          columns={categoryColumns}
          dataSource={filteredData}
          pagination={{ pageSize: 10 }}
        />
        <AddCategory isOpen={isOpen} handleOk={handleOk} handleCancel={handleCancel}/>
      </Card>
    </>
  );
};

export default Categories;
