import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";

const Laptops = ({ user, laptops }) => {
  const admin = user?.uid === "hwdNGlf4e4Qh8488jCJlxpOjEwl1";
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const handleDelete = async (id) => {
    await db.collection("Laptops").doc(id).delete();
  };

  const handleUpdate = async (id) => {
    await db.collection("Laptops").doc(id).set({
      image: image,
      desc: desc,
      price: price,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <motion.div
      className="laptops"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {admin && <AddProduct />}
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
            {!admin && <p>{laptop.desc}</p>}
            {!admin && <p>Price: ${laptop.price}</p>}
            {!admin && <p>Rating: {laptop.rating}</p>}
            {!admin && <button>add to cart</button>}
            {admin && (
              <>
                <input
                  type="text"
                  value={laptop.image}
                  onChange={handleImage}
                />
                <input type="text" value={laptop.desc} onChange={handleDesc} />
                <input
                  type="text"
                  value={laptop.price}
                  onChange={handlePrice}
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button onClick={() => handleDelete(laptop.id)}>
                    delete
                  </button>
                  <button onClick={() => handleUpdate(laptop.id)}>
                    update
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        <div>{JSON.stringify(laptops)}</div>
      </div>
    </motion.div>
  );
};

export default Laptops;
