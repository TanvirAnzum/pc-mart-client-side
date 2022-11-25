import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import googleIcon from "../assets/images/google.png";
import { signIn, signInWithGoogle } from "../firebase/authenticaion";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const response = await signIn({ email, password });
    console.log(response);
    reset();
  };

  const loginWithGoogle = async () => {
    const response = await signInWithGoogle();
    console.log(response);
  };

  return (
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
  );
};

export default Login;
