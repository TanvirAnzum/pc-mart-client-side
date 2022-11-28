import axios from "../utils/axiosInstance";

export const createBooking = async (data) => {
  const response = await axios.post("/bookings", data);
  return response.data;
};

export const getBookings = async ({ buyer, seller }) => {
  let query = "";
  if (buyer) query += `buyer=${buyer}&`;
  if (seller) query += `seller=${seller}`;

  const response = await axios.get(`/bookings?${query}`);
  return response.data;
};

export const updateBooking = async ({ id, data }) => {
  const response = await axios.patch(`/bookings/${id}`, data);

  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await axios.delete(`/bookings/${id}`);
  return response.data;
};
