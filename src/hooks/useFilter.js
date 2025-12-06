import { useState } from "react";

export const useFilter = (data, config) => {
  const { searchFields = [], selectFields = [] } = config;

  const [searchText, setSearchText] = useState("");
  const [selectedValues, setSelectedValues] = useState({});
  const [filteredData, setFilteredData] = useState(data);

  const applyFilters = (text, selects) => {
    let filtered = data;

    if (text && searchFields.length > 0) {
      filtered = filtered.filter((item) =>
        searchFields.some((field) =>
          item[field]?.toLowerCase().includes(text.toLowerCase())
        )
      );
    }

    selectFields.forEach((field) => {
      const value = selects[field];
      if (value) {
        filtered = filtered.filter(
          (item) => item[field]?.toLowerCase() === value.toLowerCase()
        );
      }
    });

    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    applyFilters(value, selectedValues);
  };

  const handleSelect = (field, value) => {
    const updated = { ...selectedValues, [field]: value };
    setSelectedValues(updated);
    applyFilters(searchText, updated);
  };

  return {
    searchText,
    filteredData,
    handleSearch,
    handleSelect,
    selectedValues,
  };
};
