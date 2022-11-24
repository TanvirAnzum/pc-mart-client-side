import React from "react";
import Advertise from "../components/home/Advertise";
import Card from "../components/home/Card";
import Carousel from "../components/home/Carousel";
import Category from "../components/home/Category";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Advertise />
      <Card />
      <WhyChooseUs />
    </>
  );
};

export default Home;
