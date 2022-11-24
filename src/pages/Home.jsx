import React from "react";
import Card from "../components/home/Card";
import Carousel from "../components/home/Carousel";
import Category from "../components/home/Category";

const Home = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Card />
    </>
  );
};

export default Home;
