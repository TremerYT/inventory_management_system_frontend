import { Form, Modal, Switch, Input } from "antd";
import {useState} from "react";

const AddCategory = ({ isOpen, handleCancel, handleOk}) => {
  const [addCategoryForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await handleOk(values);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Add Category"
      open={isOpen}
      onOk={() => addCategoryForm.submit()}
      onCancel={handleCancel}
      okButtonProps={{loading: loading}}
    >
      <Form form={addCategoryForm} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="categoryName"
          label="Category Name"
          rules={[{ required: true, message: "Category is Required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="isActive" valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCategory;
