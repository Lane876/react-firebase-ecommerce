import React from "react";
import { motion } from "framer-motion";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const About = () => {
  return (
    <motion.div
      className="about scroll"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "300px",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FaShippingFast size="5rem" />
          <p style={{ fontSize: "1.5rem" }}>Free Shipping</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            corrupti officiis pariatur cum sequi placeat neque officia?
            Assumenda rem sint eius doloribus hic repudiandae in culpa ab
            debitis fuga.
          </p>
        </div>
        <div
          style={{
            width: "300px",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <GiReturnArrow size="5rem" />
          <p style={{ fontSize: "1.5rem" }}>30 Days Return Policy</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            corrupti officiis pariatur cum sequi placeat neque officia?
            Assumenda rem sint eius doloribus hic repudiandae in culpa ab
            debitis fuga.
          </p>
        </div>
        <div
          style={{
            width: "300px",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <RiSecurePaymentFill size="5rem" />
          <p style={{ fontSize: "1.5rem" }}>Secured Payment</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            corrupti officiis pariatur cum sequi placeat neque officia?
            Assumenda rem sint eius doloribus hic repudiandae in culpa ab
            debitis fuga.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
