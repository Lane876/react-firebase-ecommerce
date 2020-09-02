import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { db } from "../config";
import Footer from "./Footer";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

const PcDetails = (props) => {
  const [pcs, setPcs] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const data = db.collection("Pcs").doc(`${id}`);
    data
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setPcs(doc.data());
          // console.log("Document data:", doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  const image = [
    { image: pcs.image_def },
    { image: pcs.image_1 },
    { image: pcs.image_2 },
    { image: pcs.image_3 },
  ];

  const AutoplaySlider = withAutoplay(AwesomeSlider);

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

        <slider />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            minWidth: "40%",
            height: "600px",
            margin: "2rem",
          }}
        >
          <h2>{pcs.title}</h2>
          <p>Specs: {pcs.desc}</p>
          <div
            style={{
              marginBottom: "4rem",
            }}
          >
            ${pcs.price}
          </div>
          <button>add to cart</button>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PcDetails;
