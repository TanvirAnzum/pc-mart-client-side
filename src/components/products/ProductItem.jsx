import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { PhotoView } from "react-photo-view";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { updateProduct } from "../../APIs/productsAPI";
import { isVerified } from "../../APIs/usersAPI";
import { AuthContext } from "../../context/AuthContext";
import ProductModal from "./ProductModal";

const ProductItem = ({ product, ad, index, setOpenAdModal }) => {
  const {
    title,
    category,
    seller,
    yearsOfUse,
    sellingPrice,
    address,
    originalPrice,
    image,
    description,
    conditionType,
    createdAt,
    _id,
  } = product;

  const key = `verified-${seller.email}`;
  const { data: isVerifiedUser } = useQuery({
    queryKey: [key, seller.email],
    queryFn: () => isVerified(seller.email),
  });

  const [modal, setModal] = useState(false);

  const { user } = useContext(AuthContext) || {};
  const navigate = useNavigate();

  const clickHandler = () => {
    if (!user) {
      toast.error("You need to be logged in!");
      navigate("/login");
      return;
    }
    if (!ad) setModal(true);
    else {
      setOpenAdModal(index + 1);
    }
  };

  // report product

  //   for updating product
  const { mutate: update } = useMutation({
    mutationFn: updateProduct,
  });

  const reportHandler = () => {
    if (!user) {
      toast.error("You need to be logged in!");
      navigate("/login");
      return;
    }
    update({
      id: _id,
      data: {
        isReporterd: "yes",
      },
    });
    toast.success("Product reported successfully");
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between shadow shadow-neutral rounded p-5">
        <div className="w-full lg:w-1/3 p-3">
          <PhotoView src={image}>
            <img src={image} alt="" className="rounded h-[20em]" />
          </PhotoView>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-2 p-3 text-xl font-semibold min-h-[15em] justify-between items-start">
          <p>
            Title: <span className="text-primary">{title}</span>
          </p>
          <p>
            Category:{" "}
            <span className="text-secondary font-mono">{category}</span>
          </p>
          <p>
            Selling Price: <span className="text-primary">{sellingPrice}</span>
          </p>
          <p>
            Original Price:{" "}
            <span className="text-primary">{originalPrice} USD</span>
          </p>

          <p>
            Description:{" "}
            <span className="font-serif font-medium">{description}</span>
          </p>
          <p>
            Posted at:{" "}
            <span className="font-serif font-medium">{createdAt}</span>
          </p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-2 p-3 text-xl font-semibold min-h-[15em] justify-between items-start">
          <p>
            address: <span className="text-primary">{address}</span>
          </p>
          <p>
            Condition Type:{" "}
            <span className="text-primary">{conditionType}</span>
          </p>
          <p>
            Years Of use: <span className="text-primary">{yearsOfUse}</span>
          </p>
          <p className="flex items-center gap-2">
            Seller:
            {!ad && (
              <img
                src={seller.photoURL}
                className="w-[2em] h-[2em] ring rounded-full"
                alt=""
              />
            )}
            <span className="text-primary">{seller.displayName}</span>{" "}
          </p>
          <p>
            Verification:
            {isVerifiedUser ? " verified" : " unverified"}
          </p>
          <div className="btn-group">
            <button className="btn btn-success w-[10em]" onClick={clickHandler}>
              Book now
            </button>
            <button className="btn btn-error w-[10em]" onClick={reportHandler}>
              Report
            </button>
          </div>
        </div>
      </div>
      {modal && !ad && <ProductModal setModal={setModal} product={product} />}
    </>
  );
};

export default ProductItem;
