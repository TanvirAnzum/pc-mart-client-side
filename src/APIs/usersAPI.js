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

export const updateUser = async (data, id) => {
  const response = await axios.patch(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`/users/${id}`);
  return response.data;
};

export const getUser = async () => {
  // getuser
};
