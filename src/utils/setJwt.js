import { toast } from "react-toastify";
import { getJWT } from "../APIs/usersAPI";
import { userSignOut } from "../firebase/authenticaion";

export const setJwt = async (email) => {
  try {
    const token = await getJWT(email);
    console.log(token);
    localStorage.setItem("authToken", token.token);
  } catch (error) {
    toast.error("JWT Token is not available.Login failed");
    await userSignOut();
  }
};
