import axios from "axios";

export const getImageUrl = async (imageFile) => {
  const img = imageFile[0];
  const formData = new FormData();
  formData.append("image", img);
  const response = await axios.post(
    `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMGBB_KEY}`,
    formData
  );
  return response.data;
};
