import React from "react";
import Scroll from "./Scroll";

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
        }}
      >
        <div
          style={{
            fontSize: "4rem",
            color: "#ffac33",
            fontWeight: "900",
            marginTop: "-100px",
            letterSpacing: "3px",
          }}
        >
          THUNDER
        </div>
        <div style={{ color: "#fff", fontWeight: "600", marginBottom: "2rem" }}>
          Blazing Fast Laptops
        </div>
        <div style={{ padding: "2rem" }}>
          <button className="landingbtn">PRODUCTS</button>
        </div>
        <Scroll />
      </div>
    </div>
  );
};

export default LandingInfo;
