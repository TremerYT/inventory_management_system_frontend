import {createContext, useContext, useEffect, useRef, useState} from "react";
import {Form, message} from "antd";
import {upload} from "../services/supabase_storage.js";
import {
  createProduct,
  getLowStockProducts,
  getOutOfStockProducts,
  getProducts,
  getProductsByQuery
} from "../services/product.service.js";

const ProductContext = createContext();
export const ProductProvider = ({children}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [outOfStockProducts, setOutOfStockProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [productOptions, setProductOptions] = useState([]);
  const [saleItems, setSaleItems] = useState([]);
  const debounce = useRef(null);

  const filteredData = products.filter((product) => {
    const matchesSearch =
      !searchText ||
      product.productName?.toLowerCase().includes(searchText.toLowerCase()) ||
      product.skuNumber?.toLowerCase().includes(searchText.toLowerCase()) ||
      product.barcodeNumber?.includes(searchText);
    const matchesCategory = !selectedCategory || (product.categoryName === selectedCategory);
    const matchesBrand = !selectedBrand || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const handleOnSelect = (_, option) => {
    console.log(option);
    console.log(_);
    const product = option.product;
    setSaleItems(prev => {
      const exists = prev.find(i => i.skuNumber === product.skuNumber);

      if (exists) {
        return prev.map(i =>
          i.sku === product.skuNumber
            ? { ...i, quantity: i.quantity + 1, subtotal: (i.quantity + 1) * i.price}
            : i
        );
      }

      return [
        ...prev,
        {
          productId: product.id,
          sku: product.skuNumber,
          name: product.productName,
          price: product.unitPrice,
          quantity: 1,
          stock: product.quantity,
          subtotal: product.unitPrice
        }
      ];
    });
  }

  const handleOnSearch = (value) => {
    clearTimeout(debounce.current);

    if (!value) {
      setProductOptions([]);
      return;
    }

    debounce.current = setTimeout(() =>{
      fetchProductsByQuery(value);
    }, 100);
  }


  const handleOnFinish = async (values) => {
    try {
      setLoading(true);
      const mainImage = values.mainImage[0]?.originFileObj;
      const mainImageUrl = await upload(mainImage, "main", "productImages");

      const galleryImagesUrl = await Promise.all(
        values.galleryImages.map((image) =>
          upload(image.originFileObj, "gallery", "productImages")
        )
      );

      const data = {
        ...values,
        mainImage: mainImageUrl,
        galleryImages: galleryImagesUrl
      }
      const response = await createProduct(data);
      message.success("Added Product successfully");
      form.resetFields();
      await fetchProducts();
    } catch (e) {
      setLoading(false);
      console.error("Error Uploading the product:", e);
      message.error("Something went wrong uploading the Product");
    } finally {
      setLoading(false);
    }
  }

  const handleOnCancel = () => {
    form.resetFields();
  }

  const fetchProductsByQuery = async(query) => {
    try {
      setLoading(true);
      const data = await getProductsByQuery(query);
      console.log(data);
      setProductOptions(
        data.map((product) => ({
          value: product.productName,
          label: (
            <div>
              <strong>{product.productName}</strong>
              <div style={{ fontSize: 12, color: "#888" }}>
                {product.skuNumber} · KES {product.unitPrice} · Quantity: {product.quantity}
              </div>
            </div>
          ),
          product: product
        }))
      )
    }
    catch (e) {
      console.error(e);
    }
    finally {
      setLoading(false);
    }
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

  const fetchLowStockProducts = async() => {
    try {
      setLoading(true)
      const data = await  getLowStockProducts();
      console.log(data);
      setLowStockProducts(data);
    } catch (e) {
      console.error("Error fetching Products:", e)
    } finally {
      setLoading(false);
    }
  }

  const fetchOutOfStockProducts = async() => {
    try {
      setLoading(true)
      const data = await getOutOfStockProducts();
      setOutOfStockProducts(data);
    } catch (e) {
      console.error("Error fetching Products:", e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchLowStockProducts();
    fetchOutOfStockProducts();
  }, []);

  return (
    <ProductContext.Provider value={{
      form,
      loading,
      products,
      lowStockProducts,
      outOfStockProducts,
      filteredData,
      productOptions,
      saleItems,
      handleOnSearch,
      handleOnSelect,
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