import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className='anchor2'>
      <p
        style={{
          color: "orange",
          fontSize: "3rem",
          letterSpacing: "5px",
          textAlign: "center",
          fontWeight: "900",
        }}
        
      >
        FEATURED
      </p>
      <div
        className="featured"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        <div style={{ position: "relative" }}>
          <Link to="/laptops">
            <img
              src="https://www.notebookcheck.net/uploads/tx_nbc2/MicrosoftSurfaceLaptop3-15__1__02.JPG"
              alt="lenovo"
              style={{
                maxWidth: "400px",
                maxHeight: "300px",
                borderRadius: "1rem",
              }}
            />
            <button className="featuredbtn">Laptops</button>
          </Link>
          {/* <p style={{ textAlign: "center" }}>blazing fast laptops</p> */}
        </div>
        <div style={{ position: "relative" }}>
          <Link to="/phones">
            <img
              src="https://balkanandroid.com/wp-content/uploads/2019/10/iphone-11-pro-max-1-640x416.jpg"
              alt="lenovo"
              style={{
                maxWidth: "400px",
                maxHeight: "300px",
                borderRadius: "1rem",
              }}
            />
            <button className="featuredbtn">Phones</button>
          </Link>
          {/* <p style={{ textAlign: "center" }}>blazing fast phones</p> */}
        </div>
        <div style={{ position: "relative" }}>
          <Link to="pcs">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81rNjavDj3L._AC_SL1500_.jpg"
              alt="lenovo"
              style={{
                maxWidth: "400px",
                maxHeight: "300px",
                borderRadius: "1rem",
              }}
            />
            <button className="featuredbtn">PC's</button>
          </Link>
          {/* <p style={{ textAlign: "center" }}>blazing fast pc's</p> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
