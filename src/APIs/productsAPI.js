import axios from "../utils/axiosInstance";

export const createProduct = async (data) => {
  const response = await axios.post("/products", data);
  return response.data;
};
