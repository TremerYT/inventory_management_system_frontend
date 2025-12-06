import {Button, Card, Input, Select, Table} from "antd";
import {FileExcelFilled, FilePdfFilled, PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import {brands, categories} from "../utils/select_items.js";
import {useState} from "react";
import {productColumns} from "../utils/columns.jsx";
import {useProductFilter} from "../hooks/useProductFilter.js";

const AllProducts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const {
    searchText,
    filteredProducts,
    handleOnChange,
    handleOnSelect,
  } = useProductFilter();

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => {
      setSelectedRowKeys(newSelectedKeys);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl">
            Product List
          </h2>
          <p>
            Manage Your Products
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            type='text'
            icon={<FilePdfFilled style={{fontSize: 20, color: "red"}}/>}
            onClick={() => {}}
          />
          <Button
            type='text'
            icon={<FileExcelFilled style={{fontSize: 20, color: "green"}}/>}
            onClick={() => {}}
          />
          <Button
            type='text'
            icon={<ReloadOutlined style={{fontSize: 20}}/>}
            onClick={() => {}}
          />
          <Button
            type='primary'
            icon={<PlusOutlined/>}
            onClick={() => {}}
          >
            Add Product
          </Button>
        </div>
      </div>

      <Card
        title={<Input.Search value={searchText} onChange={handleOnChange} className="!w-1/4"/>}
        extra= {
          <div className="flex gap-2 w-80">
            <Select
              defaultValue="Category"
              options={categories}
              className="!w-full"
              onSelect={handleOnSelect}
            />
            <Select
              defaultValue="Brand"
              options={brands}
              className="!w-full"
              onSelect={handleOnSelect}
            />
          </div>
        }
      >
        <Table
          rowSelection={rowSelection}
          columns={productColumns}
          dataSource={filteredProducts}
          pagination={{pageSize: 10}}
        />
      </Card>
    </>
  );
}

export default AllProducts;