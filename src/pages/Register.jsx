import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
    const img = data.image[0];
    const formData = new FormData();
    console.log(img);
    formData.append("image", img);
    console.log(formData);
    const response = await axios.post(
      "https://api.imgbb.com/1/upload?expiration=600&key=da7bfb9b12713e6abf6626f740b9b0e7",
      formData
    );

    console.log(response.data);

    reset();
  };

  return (
    <form
      className="w-[30em] min-h-full self-center p-5 border rounded my-20"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered"
          required
          {...register("fName")}
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
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input
          type="number"
          placeholder="Phone Number"
          className="input input-bordered"
          required
          {...register("phone")}
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Account Type</span>
        </label>
        <select
          className="select select-bordered"
          defaultValue={1}
          {...register("accontType")}
        >
          <option value={1}>Buyer Account</option>
          <option value={2}>Seller Account</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Upload a profile Image</span>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-full "
          accept="image/x-png,image/jpeg"
          required
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

      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
