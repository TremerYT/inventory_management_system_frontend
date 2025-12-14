import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";
import dayjs from "dayjs";
import {useEffect} from "react";
import {received, taxes} from "../../utils/select_items.js";

const {TextArea} = Input;
const generatePUR = () => {
  const code = "PUR";
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const PurchaseForm = () => {
  const [purchaseForm] = Form.useForm();
  useEffect(() => {
    const number = generatePUR();
    purchaseForm.setFieldsValue({purchareNo: number})
  }, [purchaseForm]);

  const handleOnCancel = () => {
    purchaseForm.resetFields();
  }

  return (
    <Form form={purchaseForm} layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="date"
            label="Date"
            rules={[{required: true, message: "Date is required"}]}
          >
            <DatePicker disabledDate={(current) => (current && current < dayjs().startOf("day"))} className="w-full"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="productName"
            label="ProductName"
            rules={[{required: true, message: "Product Name is required"}]}
          >
            <Input/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="purchareNo"
            label="Purchase Number"
            rules={[{required: true}]}
          >
            <Input disabled/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="supplier"
            label="Supplier"
            rules={[{required: true, message: "Supplier is required"}]}
          >
            <Select />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="received"
            label="Received"
            rules={[{required: true, message: "Received is required"}]}
          >
            <Select options={received}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="order Tax"
            label="Order Tax"
            rules={[{required: true, message: "Order tax is required"}]}
          >
            <Select options={taxes}/>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name="discount"
            label="Discount"
            rules={[{required: true, message: "Discount is required"}]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="payment"
            label="Payment"
            rules={[{required: true, message: "Payment is required"}]}
          >
            <Input/>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="note"
            label="Note"
            rules={[{required: true, message: "Note is required"}]}
          >
            <TextArea
              rows={5}
            />
          </Form.Item>
        </Col>
      </Row>

      <div className="flex gap-4 justify-end mt-10">
        <Button type="primary" htmlType="submit" size="large">
          Add Product
        </Button>
        <Button type="primary" danger onClick={handleOnCancel} size="large">
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default PurchaseForm;