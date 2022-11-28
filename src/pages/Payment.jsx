import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import { getBookingItem } from "../APIs/bookingsAPI";
import CheckOutForm from "../components/payment/CheckOutForm";

const stripePromise = loadStripe(`${process.env.REACT_APP_PK}`);

const Payment = () => {
  const { id } = useParams();

  const { data: booking } = useQuery({
    queryKey: ["payment"],
    queryFn: () => getBookingItem(id),
  });

  const information = {};

  if (booking) {
    information.id = booking._id;
    information.price = booking.product.sellingPrice;
    information.email = booking.seller.email;
    information.productId = booking.product._id;
  }

  return (
    <div className="w-full p-5 flex flex-col gap-5">
      <div className="w-[96%] sm:w-[30em] mx-auto shadow shadow-neutral rounded flex flex-col gap-2 p-5">
        <h1 className="font-bold text-xl sm:text-3xl ">
          Payment for: {booking?.product.title}
        </h1>
        <p className="font-bold text-md sm:text-xl ">
          Price : {booking?.product?.sellingPrice}
        </p>
        <p className="font-bold text-md sm:text-xl ">
          Seller Email : {booking?.seller?.email}
        </p>
        <p className="font-bold text-md sm:text-xl">
          Buyer Email : {booking?.buyer?.email}
        </p>
      </div>

      <Elements stripe={stripePromise}>
        <CheckOutForm booking={information} />
      </Elements>
    </div>
  );
};

export default Payment;
