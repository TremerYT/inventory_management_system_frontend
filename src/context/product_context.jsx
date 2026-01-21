import {createContext, useContext, useEffect, useState} from "react";
import {Form, message} from "antd";
import {upload} from "../services/supabase_storage.js";
import {createProduct, getProducts} from "../services/product.service.js";
import {productColumns} from "../utils/columns.jsx";

const ProductContext = createContext();
export const ProductProvider = ({children}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredData = products.filter((product) => {
    const matchesSearch =
      !searchText ||
      product.productName?.toLowerCase().includes(searchText.toLowerCase()) ||
      product.skuNumber?.toLowerCase().includes(searchText.toLowerCase()) ||
      product.barcodeNumber?.includes(searchText);
      console.log({
        selectedCategory,
        productCategoryName: product.categoryName,
      });

    const matchesCategory = !selectedCategory || (product.categoryName === selectedCategory);
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

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
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    } catch (e) {
      console.error("Error fetching Products:", e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{
      form,
      loading,
      products,
      filteredData,
      handleOnCancel,
      handleOnFinish,
      setSearchText,
      setSelectedCategory,
      setSelectedBrand,
    }}>
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