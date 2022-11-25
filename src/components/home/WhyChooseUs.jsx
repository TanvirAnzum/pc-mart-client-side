import React from "react";
import choice from "../../assets/images/choice.svg";
import paymentImg from "../../assets/images/payment.png";
import qualityImg from "../../assets/images/quality.png";
import verifyImg from "../../assets/images/verified.png";

const WhyChooseUs = () => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-12">
      <h1 className="text-center uppercase font-semibold text-4xl">
        Why Choose US!!
      </h1>

      <div className="w-[80%] flex items-center justify-between">
        <img src={choice} className="w-1/3" alt="" />

        <ul className="w-1/3 flex flex-col gap-5 items-start justify-center ">
          <li className="flex items-center  gap-1">
            <img src={paymentImg} className="w-[2em]" alt="" />
            <p className="text-xl font-semibold">Trusted Payment Method</p>
          </li>
          <li className="flex items-center  gap-1">
            <img src={verifyImg} className="w-[2em]" alt="" />
            <p className="text-xl font-semibold">Verified Seller</p>
          </li>
          <li className="flex items-center  gap-1">
            <img src={qualityImg} className="w-[2em]" alt="" />
            <p className="text-xl font-semibold">Quality Products</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
