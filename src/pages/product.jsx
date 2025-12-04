import {Form} from "antd";
import ProductDetails from "../components/forms/product_details.jsx";
import ProductMetrics from "../components/forms/product_metrics.jsx";

const Product = () => {
  const [form] = Form.useForm()
  return (
    <Form
      layout="vertical"
      form={form}
    >
      <ProductDetails form={form}/>
      <ProductMetrics form={form}/>
    </Form>
  );
}

export default Product;
