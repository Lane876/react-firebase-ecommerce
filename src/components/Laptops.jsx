import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    db.collection("Laptops").onSnapshot((snapshot) => {
      setLaptops(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  console.log(laptops);
  return (
    <motion.div
      className="laptops"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          placeholder="search"
          style={{
            padding: "1rem",
            width: "400px",
            border: "1px solid orange",
            borderRadius: "8px",
            outlineColor: "orange",
          }}
        />
        <AiOutlineSearch
          size="30px"
          style={{ marginLeft: "-40px", color: "orange", cursor: "pointer" }}
        />
      </div>
      <div>Props</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {laptops.map((laptop, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "1rem",
            }}
          >
            <img src={laptop.image} width="200px" />
            <p>{laptop.desc}</p>
            <p>Price: ${laptop.price}</p>
            <p>Rating: {laptop.rating}</p>
          </div>
        ))}
      </div>
      <AddProduct />
    </motion.div>
  );
};

export default Laptops;
