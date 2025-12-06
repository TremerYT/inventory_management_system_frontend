import { useState } from "react";
import { mockCategories } from "../mock/mock_data";

export const useCategoryFilter = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(mockCategories);

  const handleOnChange = (e) => {
    const searchString = e.target.value;
    setSearchText(searchString);

    const filtered = mockCategories.filter((item) =>
      item.category.toLowerCase().includes(searchString.toLowerCase())
    );

    setFilteredCategories(filtered);
  };

  const handleOnSelect = (value) => {
    const filtered = mockCategories.filter(
      (item) => item.status.toLowerCase() === value.toLowerCase()
    );
    setFilteredCategories(filtered);
  };

  return {
    searchText,
    filteredCategories,
    handleOnChange,
    handleOnSelect,
    setFilteredCategories,
  };
};
