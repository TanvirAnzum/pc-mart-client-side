import React from "react";

const ProductModal = ({ product, setOpenModal }) => {
  const {
    image,
    address,
    description,
    category,
    originalPrice,
    sellingPrice,
    title,
    yearsOfUse,
    conditionType,
  } = product;
  return (
    <div className="min-h-[40em] w-full sm:w-[30em] border rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-base-300 flex flex-col p-5 gap-2 font-semibold text-lg z-[50]">
      <img src={image} alt="product loading" className="h-[20em]" />
      <p>Title: {title}</p>
      <p>Original Price: {originalPrice} Tk</p>
      <p>Selling Price: {sellingPrice} Tk</p>
      <p>
        Category:
        <p className="badge badge-success mx-2">{category}</p>
      </p>
      <p>Years of use: {yearsOfUse}</p>
      <p>
        Condition:
        <p className="badge badge-accent mx-2">{conditionType}</p>
      </p>
      <p>Address: {address}</p>
      <p>Description: {description}</p>
      <button
        className="btn w-[8em] self-center btn-error"
        onClick={() => setOpenModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default ProductModal;
