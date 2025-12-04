import {Form} from "antd";
import ProductForm from "../components/forms/product.jsx";

const ProductDetails = () => {
  const [form] = Form.useForm()
  return (
    <Form
      layout="vertical"
      form={form}
    >
      <ProductForm form={form}/>
    </Form>
  );
}

export default ProductDetails;
