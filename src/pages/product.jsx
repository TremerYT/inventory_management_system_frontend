import {Button, Form} from "antd";
import ProductDetails from "../components/forms/product_details.jsx";
import ProductMetrics from "../components/forms/product_metrics.jsx";
import ProductImages from "../components/forms/product-images.jsx";


const Product = () => {
  const [form] = Form.useForm()
  const handleOnFinish = () => {}
  const handleOnCancel = () => {
    form.resetFields();
  }
  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={handleOnFinish}
    >
      <div className="flex flex-col gap-6">
        <ProductDetails form={form} />
        <ProductMetrics form={form} />
        <ProductImages form={form} />
      </div>
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

export default Product;
