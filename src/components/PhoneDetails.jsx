import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { db } from "../config";
import Footer from "./Footer";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import { getProduct } from "../redux/cart/cartActions";
import { useDispatch } from "react-redux";

const PhoneDetails = (props) => {
  const dispatch = useDispatch();

  const [phones, setPhones] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const data = db.collection("Phones").doc(`${id}`);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setPhones(doc.data());
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
    { image: phones.image_def },
    { image: phones.image_1 },
    { image: phones.image_2 },
    { image: phones.image_3 },
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
                  width: "50%",
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
          <h2>{phones.title}</h2>
          <p>Specs: {phones.desc}</p>
          <div
            style={{
              marginBottom: "4rem",
            }}
          >
            ${phones.price}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="detailsBtn"
              onClick={() => {
                phones.id = id;
                dispatch(getProduct(phones));
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </motion.div>
  );
};

export default PhoneDetails;
