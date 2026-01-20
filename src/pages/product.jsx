import {Button, Form, message} from "antd";
import ProductDetails from "../components/forms/product_details.jsx";
import ProductMetrics from "../components/forms/product_metrics.jsx";
import ProductImages from "../components/forms/product-images.jsx";
import {upload} from "../services/supabase_storage.js";
import {createProduct} from "../services/product.service.js";
import {useState} from "react";


const Product = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleOnFinish = async (values) => {
    try {
      setLoading(true);
      const mainImage = values.mainImage[0]?.originFileObj;
      const mainImageUrl = await upload(mainImage, "main");

      const galleryImagesUrl = await Promise.all(
        values.galleryImages.map((image) =>
          upload(image.originFileObj, "gallery"))
      );

      const data = {
        ...values,
        mainImage: mainImageUrl,
        galleryImages: galleryImagesUrl
      }
      console.log(data);
      const response = await createProduct(data);
      console.log(response);
      message.success("Added Product successfully");
      form.resetFields();
    }
    catch (e) {
      setLoading(false);
      message.error("Something went wrong uploading the Product");
      console.log("Error:", e);
    }
    finally {
      setLoading(false);
    }
  }
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
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
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
