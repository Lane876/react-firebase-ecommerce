import React from "react";
import {Link} from 'react-scroll'

const Scroll = () => {
  return (
    <Link activeClass="active"
      to="scroll"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={1000}
      delay={100}
      isDynamic={true}
      ignoreCancelEvents={false}
>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        left:"50%",
        transform:"translate(-50%)",
        bottom: "1rem",
        cursor:"pointer",
        
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
    </Link>
  );
};

export default Scroll;
