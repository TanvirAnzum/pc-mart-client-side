import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUser } from "../APIs/usersAPI";
import googleIcon from "../assets/images/google.png";
import { signIn, signInWithGoogle } from "../firebase/authenticaion";
import GlobalLoader from "../ui/GlobalLoader";
import { setJwt } from "../utils/setJwt";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (data) => {
    const { email, password } = data;
    setIsLoading(() => true);
    const response = await signIn({ email, password });
    if (response.accessToken) {
      await setJwt(response.email);
    } else {
      setError(response);
    }
    setIsLoading(() => false);
    reset();
  };

  const loginWithGoogle = async () => {
    const response = await signInWithGoogle();
    if (response.accessToken) {
      await setJwt(response.email);
      await createUser(
        {
          uid: response.uid,
          email: response.email,
          role: "buyer",
          displayName: response.displayName,
        },
        true
      );
    } else {
      setError(response);
    }
  };

  return (
    <>
      {isLoading && <GlobalLoader />}
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 self-center">
        <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
              {...register("password")}
            />
            <label className="label">
              <Link href="#" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
            {error && <p className="font-semibold text-error">{error}</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control">
            <p className="text-sm font-semibold text-secondary mx-auto">
              Sign up using
            </p>
            <img
              src={googleIcon}
              onClick={loginWithGoogle}
              alt=""
              className="w-[2em] mx-auto cursor-pointer"
            />
          </div>
          <div className="form-control mt-2">
            <Link
              className="text-md font-semibold text-primary uppercase mx-auto text-center"
              to="/register"
            >
              Create an account!
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
