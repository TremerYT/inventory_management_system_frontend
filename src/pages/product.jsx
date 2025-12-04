import {Form} from "antd";
import ProductForm from "../components/forms/product_details.jsx";

const Product = () => {
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

export default Product;
