import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/images/batch_1.jpg";
import img2 from "../../assets/images/batch_2.jpg";
import img3 from "../../assets/images/batch_3.jpg";
import img4 from "../../assets/images/batch_4.jpg";

import React from "react";

const CarouselItem = () => {
  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        dynamicHeight={false}
      >
        <div className="relative">
          <img src={img4} alt="" />
          <div className="absolute top-0 left-0 right-0 bottom-0 sm:bg-[rgba(0,0,0,0.6)]"></div>
          <p className="legend hidden sm:block">Sell your used Graphics card</p>
        </div>
        <div className="relative">
          <img src={img2} alt="" />
          <div className="absolute top-0 left-0 right-0 bottom-0 sm:bg-[rgba(0,0,0,0.6)]"></div>
          <p className="legend hidden sm:block">Sell your used Processor</p>
        </div>
        <div className="relative">
          <img src={img3} alt="" />
          <div className="absolute top-0 left-0 right-0 bottom-0 sm:bg-[rgba(0,0,0,0.6)]"></div>
          <p className="legend hidden sm:block">Sell your used Keyboard</p>
        </div>
        <div className="relative">
          <img src={img1} alt="" />
          <div className="absolute top-0 left-0 right-0 bottom-0 sm:bg-[rgba(0,0,0,0.6)]"></div>
          <p className="legend hidden sm:block">Sell your used Graphics card</p>
        </div>
      </Carousel>
      <div className="absolute top-[25%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 w-[80%]  lg:w-[46em] h-[2em] sm:h-[12em] sm:flex items-center sm:justify-center gap-4 lg:gap-0 lg:justify-between flex-col hidden">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-8xl uppercase sm:text-primary font-serif">
          PC Mart
        </h1>
        <p className="font-bold hidden sm:block sm:text-lg lg:text-2xl uppercase text-white text-center font-mono">
          Buy or Sell your unused computer, computer components and accessories
          with ease
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
