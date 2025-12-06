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
import {useCategoryFilter} from "../hooks/useCategoryFilter.js";

const Categories = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const {
    searchText,
    filteredCategories,
    handleOnChange,
    handleOnSelect,
  } = useCategoryFilter();

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => {
      setSelectedRowKeys(newSelectedKeys);
    },
  };

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
          <Button type="primary" icon={<PlusOutlined />} onClick={() => {}}>
            Add Category
          </Button>
        </div>
      </div>

      <Card
        title={
          <Input.Search
            value={searchText}
            onChange={handleOnChange}
            className="!w-1/4"
          />
        }
        extra={
          <Select
            defaultValue="Status"
            options={status}
            onSelect={handleOnSelect}
          />
        }
      >
        <Table
          rowSelection={rowSelection}
          columns={categoryColumns}
          dataSource={filteredCategories}
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </>
  );
};

export default Categories;
