import { Card, Col, Form, Input, Row, Select, Typography } from "antd";
import {categories, stores, units, wareHouses} from "../../utils/select_items.js";

const { Title } = Typography;
const { TextArea } = Input;
const generateSKU = (productName) => {
  if (!productName) return "";
  const code = productName.substring(0, 3).toUpperCase();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const ProductDetails = ({ form }) => {
  const handleProductChange = (value) => {
    const sku = generateSKU(value);
    form.setFieldsValue({ skuNumber: sku });
  };
  return (
    <Card title={<Title level={5}>Product Information</Title>}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="skuNumber"
            label="SKU"
            rules={[{ required: true, message: "SKU is Required" }]}
          >
            <Input disabled placeholder={generateSKU()} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: "Product is Required" }]}
          >
            <Input onChange={(e) => handleProductChange(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Category is Required" }]}
          >
            <Select options={categories} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="brand"
            label="Brand"
            rules={[{ required: true, message: "Brand is Required" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Description is Required" }]}
          >
            <TextArea rows={7} />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductDetails;
