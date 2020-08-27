import React from "react";
import Scroll from "./Scroll";
import { Link } from "react-scroll";

const LandingInfo = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "100",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height:"100vh"
        }}
      >
        <div>

        <div
          style={{
            fontSize: "4rem",
            color: "#ffac33",
            fontWeight: "900",
            letterSpacing: "5px",
          }}
          >
          THUNDER
        </div>
        <div style={{ color: "#fff", fontWeight: "600", textAlign:"center", margin:"1rem" }}>
          blazing fast tech
        </div>
          </div>
        <div style={{margin:"2rem"}}>
        <Link
      activeClass="active"
      to="anchor2"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-30}
      duration={1000}
      delay={100}
      isDynamic={true}
      ignoreCancelEvents={false}
    >

          <button className="landingbtn">PRODUCTS</button>
    </Link>
          
        </div>
        <Scroll />
      </div>
    </div>
  );
};

export default LandingInfo;
