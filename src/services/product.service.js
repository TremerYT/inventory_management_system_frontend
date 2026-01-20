import api from "./api.js";


export const createProduct = async (data) => {
  try {
    const response = await api.post("/products/create", data);
    return response.data;
  }
  catch (e) {
    console.error("Failed to create products");
    throw e;
  }
}

export const getProduct = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  }
  catch (e) {
    console.error("Failed to fetch products");
    throw e;
  }
}

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }
  catch (e) {
    console.error("Failed to fetch product");
    throw e;
  }
}

export const updateProduct = async (id, data) => {
  try {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  }
  catch (e) {
    console.error("Failed to update product");
    throw e;
  }
}

export const getLowStockProducts = async () => {
  try {
    const response = await api.get("/products/low-stock");
    return response.data;
  }
  catch (e) {
    console.error("Failed to get products");
    throw e;
  }
}

export const getOutOfStockProducts = async () => {
  try {
    const response = await api.get("/products/out-of-stock");
    return response.data;
  }
  catch (e) {
    console.error("Failed to get products");
    throw e;
  }
}

export const getSummary = async () => {
  try {
    const response = await api.get("/products/summary");
    return response.data;
  }
  catch (e) {
    console.error("Failed to get summary");
    throw e;
  }
}

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  }
  catch (e) {
    console.error("Failed to delete products");
    throw e;
  }
}

