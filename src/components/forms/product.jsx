import { Form } from 'antd';

const ProductForm = () => {
  const [productForm] = Form.useForm()
  return (
    <Form
      form={productForm}
    >
    </Form>
  );
}

export default ProductForm