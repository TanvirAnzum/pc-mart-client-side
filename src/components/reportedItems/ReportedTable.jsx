import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import { deleteProduct } from "../../APIs/productsAPI";
import GlobalLoader from "../../ui/GlobalLoader";

const ReportedTable = ({ product, index }) => {
  const queryClient = useQueryClient();

  //   for deleting product
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      queryClient.invalidateQueries({ queryKey: ["categoryProducts"] });
      queryClient.invalidateQueries({ queryKey: ["reportedItems"] });
    },
  });

  const deleteHandler = (id) => {
    mutate(id);
    toast.success("Product deleted successfully!");
  };

  return (
    <>
      <tr className="hover text-center">
        <th>{index}</th>
        <td>{product.title}</td>
        <td>{product.sellingPrice}</td>
        <td>{product.seller.email}</td>
        <td>
          <button
            className="btn btn-error w-[6em]"
            onClick={() => deleteHandler(product._id)}
          >
            Delete
          </button>
        </td>
      </tr>
      {isLoading && <GlobalLoader />}
    </>
  );
};

export default ReportedTable;
