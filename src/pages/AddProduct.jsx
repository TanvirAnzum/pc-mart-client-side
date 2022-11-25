import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createProduct } from "../APIs/productsAPI";
import { AuthContext } from "../context/AuthContext";
import GlobalLoader from "../ui/GlobalLoader";
import { getImageUrl } from "../utils/getImageUrl";

const AddProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation({ mutationFn: createProduct });
  const { user } = useContext(AuthContext);

  const addProduct = async (data) => {
    setIsLoading(() => true);
    const imgLink = await getImageUrl(data.image);
    data.image = imgLink.data.display_url;
    data.seller = user;
    mutate(data);
    setIsLoading(() => false);
    toast.success("Product added SuccessFully!!");
    reset();
  };

  return (
    <>
      <form
        className="w-[70%] my-10 p-8 border self-start rounded-xl border-none shadow-2xl bg-base-200"
        onSubmit={handleSubmit(addProduct)}
      >
        <h1 className="text-center text-xl font-semibold text-primary">
          Add Product
        </h1>
        <div className="flex w-full justify-between items-center">
          <div className="w-[40%]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Title</span>
              </label>
              <input
                type="text"
                placeholder="Product Title"
                className="input input-bordered"
                required
                {...register("title")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Selling Price</span>
              </label>
              <input
                type="number"
                placeholder="Selling Price in Taka"
                className="input input-bordered"
                required
                {...register("sellingPrice")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="number"
                placeholder="Original Price in Taka"
                className="input input-bordered"
                required
                {...register("originalPrice")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Condition Type</span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue="excellent"
                {...register("conditionType")}
              >
                <option value="excellent">Excellent Condition</option>
                <option value="good">Good Condition</option>
                <option value="fair">Fair Condition</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Years of Use</span>
              </label>
              <input
                type="text"
                placeholder="Years of Use"
                className="input input-bordered"
                required
                {...register("yearsOfUse")}
              />
            </div>
          </div>
          <div className="w-[40%]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Type</span>
              </label>
              <select
                className="select select-bordered w-full"
                defaultValue="desktop"
                {...register("category")}
              >
                <option value="desktop">Full Desktop Build</option>
                <option value="components">Computer Components</option>
                <option value="accessories">Computer Accessories</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Short Description"
                className="input input-bordered"
                required
                {...register("description")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Remarks</span>
              </label>
              <input
                type="text"
                placeholder="Remarks"
                className="input input-bordered"
                required
                {...register("remarks")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Prduct Image</span>
              </label>
              <input
                type="file"
                className="file-input w-full input-bordered"
                {...register("image")}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
      {isLoading && <GlobalLoader />}
    </>
  );
};

export default AddProduct;
