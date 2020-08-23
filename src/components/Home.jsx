import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    gsap.from(".div1", {
      duration: 1,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".pmen", {
      duration: 1,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".div2", {
      duration: 1,
      delay: 0.3,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".pwomen", {
      duration: 1,
      delay: 0.3,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".div3", {
      duration: 1,
      delay: 0.6,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".pkids", {
      duration: 1,
      delay: 0.6,
      opacity: "0",
      ease: "Expo.easeInOut",
    });
    gsap.from(".thunder", {
      duration: 1,
      delay: 1,
      opacity: "0",
      x: "-1rem",
      ease: "Expo.easeInOut",
    });
    gsap.from(".media", {
      duration: 1,
      delay: 1.2,
      opacity: "0",
      x: "1rem",
      ease: "Expo.easeInOut",
    });
  }, []);

  return (
    <div className="home">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "7rem",
        }}
      >
        <p className="thunder">THUNDER</p>

        <div style={{ position: "relative" }}>
          <Link to="/men">
            <img
              className="div1"
              src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="men"
            />
            <p
              style={{
                position: "absolute",
                top: "70%",
                left: "20%",
                color: "#ffac33",
                fontWeight: "900",
                borderBottom:"4px solid white"

              }}
              className='pmen'
            >
              MEN
            </p>
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <Link to="/kids">
            <img
              className="div2"
              src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="kids"
            />
            <p
              style={{
                position: "absolute",
                top: "70%",
                left: "20%",
                color: "#ffac33",
                fontWeight: "900",
                borderBottom:"4px solid white"

              }}
              className='pkids'
            >
              KIDS
            </p>
          </Link>
        </div>
        <div style={{ position: "relative", cursor: "pointer" }}>
          <Link to="/women">
            <img
              className="div3"
              src="https://images.unsplash.com/photo-1552160753-117159821e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="women"
            />

            <p
              style={{
                position: "absolute",
                top: "70%",
                left: "20%",
                color: "#ffac33",
                fontWeight: "900",
                borderBottom:"4px solid white"
              }}
              className='pwomen'
            >
              WOMEN
            </p>
          </Link>
        </div>
      </div>
      <div style={{ display: "flex" }} className="media">
        TWITTER FACEBOOK INSTAGRAM
      </div>
    </div>
  );
};

export default Home;
