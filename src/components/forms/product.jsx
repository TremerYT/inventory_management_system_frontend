import {Col, Form, Input, Row} from 'antd';

const ProductForm = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Form.Item
          name='productSKU'
          label='Product SKU'
          rules={[{required: true, message: "Product SKU is Required"}]}
        >
          <Input
            allowclear
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

export default ProductForm