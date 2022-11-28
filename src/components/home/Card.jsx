import React from "react";
import heroImg from "../../assets/images/hero.svg";

const Card = () => {
  return (
    <div className="w-full p-5 min-h-[50vh] flex flex-col md:flex-row items-center justify-center bg-base-300 shadow shadow-neutral">
      <ul className="w-full md:w-1/2 list-disc text-xl font-semibold text-secondary">
        <li>Create an account with us</li>
        <li>Find what you want and purchase with low cost</li>
        <li>Up your unused product for sell & get profit</li>
        <li>U can boost your product using low amount of cost</li>
        <li>Earn verified badge to get discount from us</li>
        <li>Report any suspicious activites to get reward</li>
      </ul>

      <img src={heroImg} className="w-full md:w-[30em]" alt="" />
    </div>
  );
};

export default Card;
