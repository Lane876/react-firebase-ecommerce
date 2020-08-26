import React from "react";
import About from "./About";
import Slider from "./Slider";
import LandingInfo from "./LandingInfo";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <LandingInfo />
      <About />
    </div>
  );
};

export default Home;
