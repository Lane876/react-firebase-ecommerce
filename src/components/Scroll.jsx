import React from "react";

const Scroll = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        bottom: "-10rem",
      }}
    >
      <div className="mouse">
        <span></span>
      </div>
      <div className="arrow">
        <span></span>
      </div>
      <div className="arrow">
        <span></span>
      </div>
    </div>
  );
};

export default Scroll;
