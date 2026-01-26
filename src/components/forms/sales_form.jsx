import { AutoComplete, Col, DatePicker, Form, Input, Row, Select } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useProduct } from "../../context/product_context.jsx";

const generateRef = () => {
  return `SALE-${Date.now().toString().slice(-6)}`;
};

const SalesForm = () => {
  const [form] = Form.useForm();
  const { productOptions, handleOnSearch, handleOnSelect} = useProduct();

  useEffect(() => {
    const number = generateRef();
    form.setFieldsValue({ referenceNumber: number });
  }, [form]);

  return (
    <Form layout="vertical" form={form} onFinish={(values) => {}}>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Reference No" name="referenceNumber">
            <Input disabled />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker
              className="w-full"
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Customer name"
            name="customerName"
            rules={[{ required: true, message: "Customer Name is required" }]}
          >
            <Select options={[]} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            label="Choose product"
            name="productName"
            rules={[{ required: true, message: "Product Name is required" }]}
          >
            <AutoComplete
              options={productOptions}
              onSelect={handleOnSelect}
              onSearch={handleOnSearch}
              filterOption={false}
            >
              <Input.Search size="large" className="w-full" />
            </AutoComplete>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SalesForm;
