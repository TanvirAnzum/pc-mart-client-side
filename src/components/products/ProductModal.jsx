import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createBooking } from "../../APIs/bookingsAPI";
import { updateProduct } from "../../APIs/productsAPI";
import { AuthContext } from "../../context/AuthContext";
import GlobalLoader from "../../ui/GlobalLoader";

const ProductModal = ({ setModal, product }) => {
  const { user } = useContext(AuthContext) || {};
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  //   for updating product
  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      queryClient.invalidateQueries({ queryKey: ["categoryProducts"] });
      queryClient.invalidateQueries({ queryKey: ["addvertiseProduct"] });
    },
  });

  //   for creating booking

  const { mutate: booking, isLoading } = useMutation({
    mutationFn: createBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrder"] });
    },
  });

  const submitHandler = (data) => {
    data.product = product;
    data.buyer = user;
    data.seller = product.seller;
    console.log(data);
    booking(data);
    const updatedData = { status: "booked" };
    update({ id: product._id, data: updatedData });
    toast.success("Product booked successfully!");
    setModal(false);
  };

  return (
    <>
      {(isLoading || isUpdating) && <GlobalLoader />}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-[rgba(0,0,0,0.6)]"></div>
      <form
        className="min-h-[40em] w-full sm:w-[30em] border rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-300 flex flex-col p-5 gap-2 font-semibold text-lg z-[50]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-center text-xl font-semibold text-primary">
          Confirm Booking
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Display Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Title"
            className="input input-bordered"
            value={user.displayName}
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Product Title"
            className="input input-bordered"
            value={user.email}
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Title"
            className="input input-bordered"
            value={product.title}
            disabled
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Selling Price</span>
          </label>
          <input
            type="text"
            placeholder="Product Title"
            className="input input-bordered"
            value={product.sellingPrice + " Taka"}
            disabled
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
            {...register("contactNumber")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Meeting Location</span>
          </label>
          <input
            type="text"
            placeholder="Meeting Location"
            className="input input-bordered"
            {...register("meetingLocation")}
            required
          />
        </div>

        <div className="btn-group text-center mx-auto mt-5">
          <button className="btn btn-success w-[6em]" type="submit">
            Submit
          </button>
          <button
            className="btn btn-error  w-[6em]"
            type="button"
            onClick={() => setModal(false)}
          >
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default ProductModal;
