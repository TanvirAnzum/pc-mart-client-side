import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../../assets/images/gpu.png";

const Advertise = () => {
  return (
    <div className="w-full p-5 min-h-[50vh] bg-base-100 flex flex-col items-center justify-center gap-5">
      <h1 className="text-center font-bold text-2xl text-success uppercase">
        Products you may like!
      </h1>
      <div className="w-full h-[20em] ring">
        <Carousel>
          <div className="w-full h-[20em] flex items-center justify-center">
            <div className="w-[40%]">
              <img src={img} className="w-full h-[12em]" alt="sds" />
            </div>
            <div>
              <h1>hello</h1>
              <p>Hello there</p>
            </div>
          </div>
          <div className="w-full h-[20em] flex items-center justify-center">
            <div>
              <img src="" alt="sds" />
            </div>
            <div>
              <h1>hello</h1>
              <p>Hello there</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertise;
