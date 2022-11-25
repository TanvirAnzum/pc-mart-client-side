import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    authorization: "Bearer " + localStorage.getItem("authToken"),
  },
});

export default instance;
