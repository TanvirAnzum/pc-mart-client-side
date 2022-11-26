import axios from "../utils/axiosInstance";

export const createProduct = async (data) => {
  const response = await axios.post("/products", data);
  return response.data;
};

export const getProducts = async ({ email, status, boost }) => {
  let query = "";
  if (email) query += `email=${email}&`;
  if (status) query += `status=${status}&`;
  if (boost) query += `boost=${boost}`;
  const response = await axios.get(`/products?${query}`);
  return response.data;
};

export const getProductsByCategory = async (id) => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};

export const updateProduct = async ({ id, data }) => {
  const response = await axios.patch(`/products/${id}`, data);
  return response.data;
};
