import axios from "../utils/axiosInstance";

export const getJWT = async (data) => {
  const response = await axios.post("/jwt", data);
  return response.data;
};

export const getRole = async (email) => {
  const response = await axios.get(`/role?email=${email}`);
  return response.data;
};

export const createUser = async (data, upsert) => {
  const response = await axios.post(`/users?upsert=${upsert}`, data);
  return response.data;
};

export const updateUser = async ({ data, mail }) => {
  console.log(data, mail);
  const response = await axios.patch(`/users?email=${mail}`, data);
  return response.data;
};

export const removeUser = async (email) => {
  const response = await axios.delete(`/users?email=${email}`);
  return response.data;
};

export const getUser = async ({ seller, buyer }) => {
  // getuser
  let query = "";
  if (seller) query += "seller=true";
  if (buyer) query += "buyer=true";
  const response = await axios.get(`/users?${query}`);
  return response.data;
};

export const isVerified = async (email) => {
  const response = await axios.get(`/isVerified?email=${email}`);
  return response.data;
};
