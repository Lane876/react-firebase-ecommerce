import React, { useEffect, useState } from "react";
import { db } from "../config";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from './Footer'

const LaptopDetails = (props) => {
  const [laptops, setLaptops] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const data = db.collection("Laptops").doc(`${id}`);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setLaptops(doc.data());
          // console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

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
          fontSize: "3rem",
          color: "#ffac33",
          cursor: "pointer",
        }}
      >
        <MdKeyboardArrowRight />
      </div>
    ),
  };

  const images = [
    { image: laptops.image_def },
    { image: laptops.image_1 },
    { image: laptops.image_2 },
    { image: laptops.image_3 },
  ];

  return (
    <>
    <div
      style={{
        paddingTop: "6rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <div style={{width:"700px"}}>
        <Zoom {...properties}>
          {images.map((each, index) => (
            <div
              key={index}
              style={{ width: "100%", height: "100%", zIndex: "-1" }}
              
            >
              <div
                alt="land"
                style={{
                  backgroundImage: `url(${each.image})`,
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </Zoom>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          minWidth: "40%",
          height: "600px",
          margin:"2rem"
        }}
      >
        <h2>{laptops.title}</h2>
        <p>Specs: {laptops.desc}</p>
        <div
          style={{
            marginBottom: "4rem",
          }}
        >
          ${laptops.price}
        </div>
        <button>add to cart</button>
      </div>
    </div>
      <Footer/>
      </>
  );
};

export default LaptopDetails;
