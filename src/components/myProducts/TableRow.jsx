import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { deleteProduct, updateProduct } from "../../APIs/productsAPI";
import GlobalLoader from "../../ui/GlobalLoader";
import ProductModal from "./ProductModal";

const TableRow = ({ product, index }) => {
  const { title, status, sellingPrice, _id, boost } = product || {};
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);

  //   for deleting product
  const { mutate, isLoading } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      queryClient.invalidateQueries({ queryKey: ["categoryProducts"] });
    },
  });

  //   for updating product
  const { mutate: update, isLoading: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProducts"] });
      queryClient.invalidateQueries({ queryKey: ["categoryProducts"] });
      queryClient.invalidateQueries({ queryKey: ["addvertiseProduct"] });
    },
  });

  const boostHandler = (id) => {
    const updatedData = { boost: true };
    update({ id, data: updatedData });
    toast.success("Product added to the advertisement section successfully!");
  };

  const deleteHandler = (id) => {
    mutate(id);
    toast.success("Product deleted successfully!");
  };

  return (
    <>
      {(isLoading || isUpdating) && <GlobalLoader />}
      <tr className="hover text-center">
        <th>{index}</th>
        <td>{title}</td>
        <td>{sellingPrice}</td>
        <td>{status ? status : "unsold"}</td>
        <td>
          {boost ? (
            "Advertised"
          ) : status === "sold" ? (
            "N/A"
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => boostHandler(_id)}
            >
              Boost
            </button>
          )}
        </td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => setOpenModal(true)}
          >
            view
          </button>
        </td>
        <td>
          <button className="btn btn-error" onClick={() => deleteHandler(_id)}>
            Delete
          </button>
        </td>
      </tr>
      {openModal && (
        <ProductModal product={product} setOpenModal={setOpenModal} />
      )}
    </>
  );
};

export default TableRow;
