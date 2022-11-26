import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PhotoView } from "react-photo-view";
import { isVerified } from "../../APIs/usersAPI";
import unverifiedImg from "../../assets/images/unverified.png";
import verifiedImg from "../../assets/images/unverified_user.png";

const ProductItem = ({ product }) => {
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
  } = product;

  const key = `verified-${seller.email}`;
  const { data: isVerifiedUser } = useQuery({
    queryKey: [key, seller.email],
    queryFn: () => isVerified(seller.email),
  });

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between shadow shadow-neutral rounded p-5">
      <div className="w-full lg:w-1/3 p-3">
        <PhotoView src={image}>
          <img src={image} alt="" className="rounded h-[20em]" />
        </PhotoView>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-2 p-3 text-xl font-semibold min-h-[12em] justify-between items-start">
        <p>
          Title: <span className="text-primary">{title}</span>
        </p>
        <p>
          Category: <span className="text-secondary font-mono">{category}</span>
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
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-2 p-3 text-xl font-semibold min-h-[12em] justify-between items-start">
        <p>
          address: <span className="text-primary">{address}</span>
        </p>
        <p>
          Condition Type: <span className="text-primary">{conditionType}</span>
        </p>
        <p>
          Years Of use: <span className="text-primary">{yearsOfUse}</span>
        </p>
        <p className="flex items-center gap-2">
          Seller: <span className="text-primary">{seller.displayName}</span>{" "}
          <span
            className="text-secondary font-sm font-bold tooltip"
            data-tip={isVerifiedUser ? "verified" : "unverified"}
          >
            <img
              src={isVerifiedUser ? verifiedImg : unverifiedImg}
              alt=""
              className="w-[1em] h-[1em] cursor-pointer"
            />
          </span>
        </p>
        <button className="btn btn-success w-[10em]">Book now</button>
      </div>
    </div>
  );
};

export default ProductItem;
