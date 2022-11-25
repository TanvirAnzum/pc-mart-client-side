import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "./config";

const auth = getAuth(app);

// registraion using email and password

export const registerUser = async ({
  email,
  password,
  photoURL,
  displayName,
  phoneNumber,
}) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      photoURL,
      displayName,
      phoneNumber,
    });

    return response.user;
  } catch (error) {
    return error;
  }
};

//normal sign in from form submission
export const signIn = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (error) {
    return error.message;
  }
};

// sign in with google
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    return response.user;
  } catch (error) {
    return error.message;
  }
};

// sign out

export const userSignOut = async () => {
  try {
    localStorage.removeItem("authToken");
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
