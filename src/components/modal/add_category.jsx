import { Form, Modal, Switch, Input } from "antd";

const AddCategory = ({ isOpen, handleCancel, handleOk }) => {
  const [addCategoryForm] = Form.useForm();

  const onFinish = (values) => {
    handleOk(values);
    addCategoryForm.resetFields();
  };

  return (
    <Modal
      title="Add Category"
      open={isOpen}
      onOk={() => addCategoryForm.submit()}
      onCancel={handleCancel}
    >
      <Form form={addCategoryForm} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="category"
          label="Category Name"
          rules={[{ required: true, message: "Category is Required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="active" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategory;
