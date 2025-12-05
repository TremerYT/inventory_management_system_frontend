import {Button, Card, Input, Select, Table} from "antd";
import {FileExcelFilled, FilePdfFilled, PlusOutlined, ReloadOutlined} from "@ant-design/icons";
import {brands, categories} from "../utils/select_items.js";
import {useState} from "react";
import {productColumns} from "../utils/columns.jsx";
import {mockProducts} from "../mock/mock_data.jsx";

const AllProducts = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(mockProducts);
  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys) => {
      setSelectedRowKeys(newSelectedKeys);
    }
  };
  const handleOnChange = (e) => {
    const searchString = e.target.value;
    setSearchText(searchString);

    const filtered = mockProducts.filter((item) => item.productName)
  }

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
        title={<Input.Search onChange={handleOnChange} className="!w-1/4"/>}
        extra= {
          <div className="flex gap-2 w-80">
            <Select
              defaultValue="Category"
              options={categories}
              className="!w-full"
            />
            <Select
              defaultValue="Brand"
              options={brands}
              className="!w-full"
            />
          </div>
        }
      >
        <Table
          rowSelection={rowSelection}
          columns={productColumns}
          dataSource={mockProducts}
        />
      </Card>
    </>
  );
}

export default AllProducts;