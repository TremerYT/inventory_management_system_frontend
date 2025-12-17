import {Modal, Form, Select, InputNumber, Button, Table, Row, Col, Input} from "antd";
import {useEffect, useState} from "react";
import {discounts, discountType, saleStatus, taxes, taxType} from "../../utils/select_items.js";

const generateSaleNumber = () => {
  const code = "SALE";
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `${code}-${randomNumber}`;
};

const AddSale = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [items, setItems] = useState([]);
  const currentTaxType = Form.useWatch("taxType", form);
  const currentDiscountType = Form.useWatch("discountType", form);

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
      "quantity",
      "taxValue",
      "discountValue"
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
          taxValue: values.taxValue,
          discountValue: values.discountValue,
          subtotal: values.price * values.quantity,
        }
      ]
    );
    form.resetFields(["productName", "price", "quantity", "taxValue", "discountValue"]);
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
              name="productName"
              label="Product Name"
            >
             <Input/>
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
              name="discountType"
              label="Discont Type"
              rules={[{required: true, message: "Discount Type is required"}]}
            >
              <Select
                options={discountType}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
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
          { title: "Tax", dataIndex: "taxValue" },
          { title: "Discount", dataIndex: "discountValue" },
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
