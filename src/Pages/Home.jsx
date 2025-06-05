import React from "react";

import LaptopCarousel from "../Component/LaptopCarousel";

import News from "../Components/News";
import Footer from "../Components/Footer";
import Hero from "../Components/About/Hero";
import AboutDetail from "../Components/About/AboutDetail";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutDetail />
      <News />
      <LaptopCarousel />

      <Footer />
    </>
  );
};

export default Home;
