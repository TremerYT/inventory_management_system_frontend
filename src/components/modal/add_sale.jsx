import {Modal, Form, Select, InputNumber, Button, Table, Row, Col, Input} from "antd";
import {useEffect, useState} from "react";
import {saleStatus} from "../../utils/select_items.js";

const generateSaleNumber = () => {
  const code = "SALE";
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const AddSale = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const number = generateSaleNumber();
    const date = new Date(Date.now()).toISOString().split("T")[0];
    if (open) {
      form.setFieldsValue({ saleId: number, date: date});
    }
  }, [form, open]);

  const addItem = () => {
    const values = form.getFieldsValue([
      "productName",
      "price",
      "quantity"
    ]);

    if (!values.productName || !values.price || !values.quantity) {
      return;
    }
    setItems((previous) => [
      ...previous,
        {
          key: Date.now(),
          productName: values.productName,
          price: values.price,
          quantity: values.quantity,
          subtotal: values.price * values.quantity,
        }
      ]
    );

    form.resetFields(["productName", "price", "quantity"]);
  }

  const total = items.reduce((sum, i) => sum + i.subtotal, 0);
  const handleSave = () => {}
  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleSave}
      width={900}
      title="Add New Sale"
    >
      <Form form={form} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="customerId"
              label="Customer Name"
              rules={[{required: true, message: "Customer Name is Required"}]}
            >
              <Select/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="saleId"
              label="Reference Number"
            >
              <Input disabled/>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="date"
              label="Date"
            >
              <Input disabled/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="productName"
              label="Product Name"
            >
             <Input/>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
            >
              <InputNumber placeholder="Price" min={0} className="!w-full"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Quantity"
            >
              <InputNumber placeholder="Quantity" min={1} className="!w-full"/>
            </Form.Item>
          </Col>
        </Row>
        <div className="flex justify-end mb-4">
          <Button type={"primary"} onClick={addItem}>Add</Button>
        </div>
      </Form>

      <Table
        dataSource={items}
        pagination={false}
        columns={[
          { title: "Product", dataIndex: "productName" },
          { title: "Qty", dataIndex: "quantity" },
          { title: "Price", dataIndex: "price" },
          { title: "Subtotal", dataIndex: "subtotal" },
        ]}
      />
      <h3 className="text-right mt-4">
        Total: <b>KES {total.toLocaleString()}</b>
      </h3>
    </Modal>
  );
};

export default AddSale;
