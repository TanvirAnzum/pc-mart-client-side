import React from "react";
import heroImg from "../../assets/images/hero.svg";

const Card = () => {
  return (
    <div className="w-full p-5 min-h-[50vh] flex items-center justify-center bg-base-300 shadow shadow-neutral">
      <div className="w-1/2"></div>

      <img src={heroImg} alt="" />
    </div>
  );
};

export default Card;
