import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { db } from "../config";
import Footer from "./Footer";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import { useDispatch } from "react-redux";
import { getProduct } from "../redux/cart/cartActions";


const LaptopDetails = (props) => {
  const dispatch = useDispatch()
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

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const image = [
    { image: laptops.image_def },
    { image: laptops.image_1 },
    { image: laptops.image_2 },
    { image: laptops.image_3 },
  ];

  return (
    <motion.div
      
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div
        style={{
          paddingTop: "6rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true}
          interval={6000}
          style={{ width: "700px", height: "500px" }}
          animation="cubeAnimation"
        >
          {image
            .filter((val) => val.image !== "")
            .map((img, i) => (
              <div
                key={i}
                data-src={img.image}
                style={{
                  width: "80%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%",
                }}
              />
            ))}
        </AutoplaySlider>


        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "600px",
            height: "600px",
            margin: "2rem",
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
          <div style={{display:"flex", justifyContent:"center"}}>
          <button className='detailsBtn' onClick={()=>dispatch(getProduct(laptops))} >ADD TO CART</button>

          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default LaptopDetails;
