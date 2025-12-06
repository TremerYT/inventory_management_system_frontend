import {useState} from "react";
import {mockProducts} from "../mock/mock_data.jsx";

export const useProductFilter = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(mockProducts);

  const handleOnChange = (e) => {
    const searchString = e.target.value;
    setSearchText(searchString);

    const filtered = mockProducts.filter(
      (item) => item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.skuNumber.toLowerCase().includes(searchString.toLowerCase())
    );

    setfilteredProducts(filtered)
  }

  const handleOnSelect = (value) => {
    const filtered = mockProducts.filter(
      (item) => item.category.toLowerCase() === value.toLowerCase() ||
        item.brand.toLowerCase() === value.toLowerCase()
    );
    setfilteredProducts(filtered);
  };

  return {
    searchText,
    filteredProducts,
    handleOnChange,
    handleOnSelect,
    setfilteredProducts,
  };
}