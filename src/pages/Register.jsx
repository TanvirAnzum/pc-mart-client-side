import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "../APIs/usersAPI";
import { registerUser } from "../firebase/authenticaion";
import { getImageUrl } from "../utils/getImageUrl";
import { setJwt } from "../utils/setJwt";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const submitHandler = async (data) => {
    const { email, phoneNumber, address, image, role, password, displayName } =
      data;

    const img = await getImageUrl(image);
    const photoURL = img.data.display_url;
    const response = await registerUser({
      email,
      password,
      photoURL,
      displayName,
      phoneNumber,
    });
    if (response.accessToken) {
      await setJwt(email);
      await createUser({
        uid: response.uid,
        email,
        address,
        role,
      });
    } else {
      setError(response);
    }

    reset();
  };

  return (
    <form
      className="w-[30em] my-10 p-8 border self-center rounded-xl border-none shadow-2xl bg-base-200"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h1 className="text-center text-xl font-semibold text-primary">
        Registration Form
      </h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Display Name</span>
        </label>
        <input
          type="text"
          placeholder="Display Name"
          className="input input-bordered"
          required
          {...register("displayName")}
        />
      </div>
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
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="number"
          placeholder="Phone Number"
          className="input input-bordered"
          required
          {...register("phoneNumber")}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered"
          required
          {...register("address")}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Acount Type</span>
        </label>
        <select
          className="select select-bordered w-full"
          defaultValue="buyer"
          {...register("role")}
        >
          <option value="buyer">Buyer Account</option>
          <option value="seller">Seller Account</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Profile Image</span>
        </label>
        <input
          type="file"
          className="file-input w-full input-bordered"
          {...register("image")}
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
      </div>
      {error && <p className="font-semibold text-error">{error}</p>}
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
