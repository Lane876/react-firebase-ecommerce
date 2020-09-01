import React from "react";
import About from "./About";
import Slider from "./Slider";
import LandingInfo from "./LandingInfo";
import Featured from "./Featured";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => {
  return (
    <motion.div
      className="home"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Slider />
      <LandingInfo />
      <About />
      <Featured />
      <Footer/>
    </motion.div>
  );
};

export default Home;
