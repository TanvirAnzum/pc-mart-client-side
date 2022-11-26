import axios from "../utils/axiosInstance";

export const createProduct = async (data) => {
  const response = await axios.post("/products", data);
  return response.data;
};

export const getProducts = async ({ email, status }) => {
  let response;
  if (status)
    response = await axios.get(`/products?email=${email}&status=${status}`);
  else response = await axios.get(`/products?email=${email}`);
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
