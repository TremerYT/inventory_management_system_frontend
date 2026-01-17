import {Button, Card, Col, Form, Input, Row, Select, Space, Typography} from "antd";
import {categories, stores, units, wareHouses} from "../../utils/select_items.js";
import {useEffect, useRef} from "react";
import JsBarcode from "jsbarcode";

const { Title } = Typography;
const { TextArea } = Input;
const generateSKU = (productName) => {
  if (!productName) return "";
  const code = productName.substring(0, 3).toUpperCase();
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const generateBarcodeNumber = () => {
  return String(Math.floor(100000000000 + Math.random() * 900000000000))
}

const ProductDetails = ({ form }) => {
  const barcodeRef = useRef(null);
  const handleProductChange = (value) => {
    const sku = generateSKU(value);
    form.setFieldsValue({ skuNumber: sku });
  };

  const handleGenerateBarcode = () => {
    const barcode = generateBarcodeNumber()
    form.setFieldsValue({barcodeNumber: barcode});
  }

  const barcodeValue = Form.useWatch("barcodeNumber", form);

  useEffect(() => {
    if (barcodeValue && barcodeRef.current){
      JsBarcode(barcodeRef.current, barcodeValue, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50,
        displayValue: true
      })
    }
  }, [barcodeValue]);
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

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="productUnit"
            label="Product Unit"
            rules={[{ required: true, message: "Product unit is Required" }]}
          >
            <Select options={units}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="barcodeNumber"
            label="Barcode"
            rules={[
              { required: true, message: "Barcode is required" }
            ]}
          >
            <Space.Compact style={{ width: "100%" }}>
              <Input
                disabled
                placeholder={barcodeValue}
              />
              <Button
                type="primary"
                onClick={handleGenerateBarcode}
              >
                Generate
              </Button>
            </Space.Compact>
          </Form.Item>
        </Col>
      </Row>

      {barcodeValue && (
        <Row>
          <Col span={24} style={{ textAlign: "center", marginBottom: 16 }}>
            <svg ref={barcodeRef} />
          </Col>
        </Row>
      )}

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
