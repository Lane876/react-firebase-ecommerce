import React, { useEffect, useState } from "react";
import { db } from "../config";
import Footer from "./Footer";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

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

  const AutoplaySlider = withAutoplay(AwesomeSlider);

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
        <AutoplaySlider
          play={true}
          cancelOnInteraction={true} // should stop playing on user interaction
          interval={6000}
          style={{width:"700px", height:"500px"}}
          animation="cubeAnimation"
          
        >
          <div data-src={laptops.image_def} style={{width:"80%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%"}}/>
          <div data-src={laptops.image_1} style={{width:"80%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%"}}/>
          <div data-src={laptops.image_2} style={{width:"80%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%"}}/>
          <div data-src={laptops.image_3} style={{width:"80%", position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%"}}/>
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
      <Footer />
    </>
  );
};

export default LaptopDetails;
