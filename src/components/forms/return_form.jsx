import { Form, DatePicker, Row, Col, Input, Select } from "antd";
import dayjs from "dayjs";
import { taxes } from "../../utils/select_items";

const generateREF = () => {
  const code = "REF";
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const ReturnForm = () => {
  const [returnForm] = Form.useForm();

  return (
    <Form form={returnForm} layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Date is Required" }]}
          >
            <DatePicker
              disabledDate={(current) =>
                current && current < dayjs().startOf("day")
              }
              className="w-full"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="refNumber" label="Reference Number">
            <Input disabled placeholder={generateREF()} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="biller"
            label="Biller"
            rules={[{ required: true, message: "Biller is Required" }]}
          >
            <Input/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="customer" label="Customer Name">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="orderTax"
            label="Order Tax"
            rules={[{ required: true, message: "Order Tax is Required" }]}
          >
            <Select options={taxes}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="orderDiscount" label="Order Discount">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="orderTax"
            label="Order Tax"
            rules={[{ required: true, message: "Order Tax is Required" }]}
          >
            <Select options={taxes}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="orderDiscount" label="Order Discount">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ReturnForm;
