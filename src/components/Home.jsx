import React from "react";
import Men from "./Men";
import Slider from "./Slider";
import LandingInfo from "./LandingInfo";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <LandingInfo />
      <Men />
    </div>
  );
};

export default Home;
