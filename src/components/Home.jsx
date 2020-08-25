import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import men from "../images/men.jpg";
import women from "../images/women.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Men from "./Men";

const properties = {
  duration: 10000,
  transitionDuration: 1000,
  infinite: true,
  scale: 1.4,
  prevArrow: (
    <div
      style={{
        width: "30px",
        marginRight: "-30px",
        fontSize: "4rem",
        color: "#ffac33",
        cursor: "pointer",
      }}
    >
      <MdKeyboardArrowLeft />
    </div>
  ),
  nextArrow: (
    <div
      style={{
        width: "30px",
        marginLeft: "-85px",
        fontSize: "4rem",
        color: "#ffac33",
        cursor: "pointer",
      }}
    >
      <MdKeyboardArrowRight />
    </div>
  ),
};

const Home = () => {
  const images = [men, women];
  return (
    <>
      <div className="slide-container" style={{ width: "100vw" }}>
        <Zoom {...properties}>
          {images.map((each, index) => (
            <div key={index} style={{ width: "100%", zIndex: "-1" }}>
              <div
                alt="land"
                style={{
                  backgroundImage: `url(${each})`,
                  height: "100vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                }}
              />
              {/* <img src={each} width="100%" /> */}
            </div>
          ))}
        </Zoom>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          zIndex: "1",
          height: "100vh",
        }}
      >
        <div
          style={{
            fontSize: "5rem",
            color: "#ffac33",
            fontWeight: "900",
            letterSpacing: "20px",
          }}
        >
          THUNDER
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "#ffac33",
            fontWeight: "600",
          }}
        >
          Lightning Fast Processors
        </div>
        <button>Products</button>
      </div>
      <Men />
    </>
  );
};

export default Home;
