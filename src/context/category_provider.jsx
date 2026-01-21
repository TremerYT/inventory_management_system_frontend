import {createContext, useContext, useEffect, useState} from "react";
import {createCategory, getCategory} from "../services/category.service.js";
import {message} from "antd";

const CategoryContext = createContext(null);
export const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const fetchCategories = async () => {
    try {
      setIsloading(true)
      const res = await getCategory();
      setCategories(
        res.map(cat => ({label: cat.categoryName, value: cat.id}))
      );
      setCategoryFilter(
        res.map(cat => ({label: cat.categoryName, value: cat.categoryName}))
      );
    } catch (e) {
      console.error("Failed to fetch categories", e);
    } finally {
      setIsloading(false);
    }
  };

  const addCategory = async (values) => {
    try {
      setIsloading(true);
      const response = await createCategory(values);
      setCategories(prev => [
          ...prev,
          {
            label: response.categoryName,
            value: response.id
          }
        ]
      );
      message.success("Category added successfully");
      return true;
    } catch (e) {
      message.error("Failed to add category");
      console.error("Failed to add category: ", e);
      return false;
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{
      categories,
      isLoading,
      categoryFilter,
      fetchCategories,
      addCategory,
    }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a Category_context");
  }
  return context;
}