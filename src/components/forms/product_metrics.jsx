import {Card, Col, Input, Row, Select, Typography} from "antd";
import {Form} from "antd";
import {discounts, discountType, taxes, taxType} from "../../utils/select_items.js";
const {Title} = Typography;
const ProductMetrics = ({form}) => {
  const currentTaxType = Form.useWatch("taxType", form);
  const currentDiscountType = Form.useWatch("discountType", form);
  return (
    <Card title={<Title level={4}>Pricing and Stocks</Title>} className="!mb-4">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{required: true, message: "Quantity is required"}]}
          >
            <Input/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="price"
            label="Price"
            rules={[{required: true, message: "Price is required"}]}
          >
            <Input/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="taxType"
            label="Tax Type"
            rules={[{required: true, message: "Tax type is required"}]}
          >
            <Select
              options={taxType}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            name="taxValue"
            label="Tax Value"
            rules={[{required: true, message: "Tax value is required"}]}
          >
            {
             currentTaxType === "percentage" ? (
                <Select options={taxes} />
              ) : (
                <Input />
              )
            }
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="discountType"
            label="Discont Type"
            rules={[{required: true, message: "Discount Type is required"}]}
          >
            <Select
              options={discountType}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="discountValue"
            label="Discount Value"
            rules={[{required: true, message: "Discount Value is required"}]}
          >
            {
              currentDiscountType === "percentage" ? (
                <Select options={discounts} />
              ) : (
                <Input />
              )
            }
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}

export default ProductMetrics;