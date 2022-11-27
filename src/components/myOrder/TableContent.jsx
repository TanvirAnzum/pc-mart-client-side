import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { PhotoView } from "react-photo-view";
import { toast } from "react-toastify";
import { deleteBooking } from "../../APIs/bookingsAPI";
import { updateProduct } from "../../APIs/productsAPI";
import GlobalLoader from "../../ui/GlobalLoader";

const TableContent = ({ booking, index }) => {
  const { seller, product, _id } = booking;

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

  //   for deleting booking

  const { mutate: deleteBook, isLoading } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myOrder"] });
    },
  });

  const unBookHandler = (productId, bookingId) => {
    update({
      id: productId,
      data: {
        status: "unsold",
      },
    });
    deleteBook(bookingId);
    toast.success("Product unbooked successfully!");
  };

  return (
    <>
      {(isLoading || isUpdating) && <GlobalLoader />}
      <tr className="hover text-center">
        <th>{index}</th>
        <td className="flex items-center justify-center">
          <PhotoView src={product.image}>
            <img
              src={product.image}
              className="w-[4em] h-[4em] cursor-pointer"
              alt=""
            />
          </PhotoView>
        </td>
        <td>{product.title}</td>
        <td>{product.sellingPrice + " Tk"}</td>
        <td>{seller.displayName}</td>
        <td>
          <button className="btn btn-success w-[6em]">Pay</button>
        </td>
        <td>
          <button
            className="btn btn-warn w-[6em]"
            onClick={() => unBookHandler(product._id, _id)}
          >
            Unbook
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableContent;
