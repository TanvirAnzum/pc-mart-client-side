import React from "react";
import { Link } from "react-router-dom";
import gpuImg from "../../assets/images/gpu.png";
import headsetImg from "../../assets/images/headset.png";
import pcImg from "../../assets/images/pc.png";

const Category = () => {
  return (
    <div className="w-full p-5 min-h-[30vh] bg-base-200 flex flex-col gap-10 items-center justify-center">
      <h1 className="text-center font-bold upper-case text-2xl  sm:text-4xl uppercase">
        What WE OFFER!
      </h1>
      <div className="w-full md:w-[80%] flex flex-col md:flex-row items-center justify-between">
        <div className="w-[20em] h-[10em] flex items-center flex-col justify-center gap-1">
          <img src={pcImg} alt="" />
          <Link className="btn btn-secondary">Complete PC build</Link>
        </div>
        <div className="w-[20em] h-[10em] flex items-center flex-col justify-center gap-1">
          <img src={gpuImg} alt="" />
          <Link className="btn btn-secondary">PC Components</Link>
        </div>
        <div className="w-[20em] h-[10em] flex items-center flex-col justify-center gap-1">
          <img src={headsetImg} alt="" />
          <Link className="btn btn-secondary">PC Accesories</Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
