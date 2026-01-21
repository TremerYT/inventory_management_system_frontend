import {createContext, useContext, useState} from "react";
import {Form, message} from "antd";
import {upload} from "../services/supabase_storage.js";
import {createProduct} from "../services/product.service.js";

const ProductContext = createContext();
export const ProductProvider = ({children}) => {
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
      const response = await createProduct(data);
      message.success("Added Product successfully");
      form.resetFields();
    } catch (e) {
      setLoading(false);
      message.error("Something went wrong uploading the Product");
    } finally {
      setLoading(false);
    }
  }
  const handleOnCancel = () => {
    form.resetFields();
  }
  return (
    <ProductContext.Provider value={{form, loading, handleOnCancel,handleOnFinish}}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a Product context");
  }
  return context;
}