import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import comp from "../images/comp.jpg";
import comp4 from "../images/comp4.jpg";
import comp6 from "../images/comp6.jpg";
import comp8 from "../images/comp8.jpg";
import comp9 from "../images/comp9.jpg";
import comp10 from "../images/comp10.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const properties = {
  duration: 6000,
  autoplay: true,
  pauseOnHover: false,
  transitionDuration: 1000,
  infinite: true,
  scale: 1.4,
  prevArrow: (
    <div
      style={{
        width: "30px",
        marginRight: "-30px",
        fontSize: "3rem",
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
        marginLeft: "-45px",
        fontSize: "3rem",
        color: "#ffac33",
        cursor: "pointer",
      }}
    >
      <MdKeyboardArrowRight />
    </div>
  ),
};

const Slider = () => {
  const images = [comp, comp4, comp6, comp8, comp9, comp10];

  return (
    <div style={{ width: "100%" }}>
      <Zoom {...properties}>
        {images.map((each, index) => (
          <div
            key={index}
            style={{ width: "100%", height: "100%", zIndex: "-1" }}
          >
            <div
              alt="land"
              style={{
                backgroundImage: `url(${each})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slider;
