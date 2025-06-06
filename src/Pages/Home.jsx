import React from "react";

import LaptopCarousel from "../Component/LaptopCarousel";

import News from "../Components/News";
import Footer from "../Components/Footer";
import Hero from "../Components/About/Hero";
import AboutDetail from "../Components/About/AboutDetail";
import OurMission from "../Components/About/OurMission";
import WhatWeOffer from "../Components/About/WhatWeOffer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutDetail />
      <OurMission />
      <WhatWeOffer />
      <News />
      <LaptopCarousel />

      <Footer />
    </>
  );
};

export default Home;
