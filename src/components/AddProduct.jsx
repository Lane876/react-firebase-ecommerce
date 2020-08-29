import React from "react";
import { db } from "../config";
import { useState } from "react";

const AddProduct = () => {
  const [option, setOption] = useState("Laptops");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    db.collection(`${option}`).add({
      image: image,
      desc: desc,
      price: price,
      rating: rating,
    });
    setImage("");
    setDesc("");
    setPrice("");
    setRating("");
  }

  function handleImage(e) {
    setImage(e.target.value);
  }
  function handleDesc(e) {
    setDesc(e.target.value);
  }
  function handlePrice(e) {
    setPrice(e.target.value);
  }
  function handleRating(e) {
    setRating(e.target.value);
  }

  function handleOption(e) {
    setOption(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "0px auto",
      }}
    >
      <select onChange={handleOption}>
        <option>Laptops</option>
        <option>Phones</option>
        <option>Pcs</option>
      </select>
      <input
        type="text"
        value={image}
        placeholder="image link"
        onChange={handleImage}
      />
      <input
        type="text"
        value={desc}
        placeholder="description"
        onChange={handleDesc}
      />
      <input
        type="number"
        value={price}
        placeholder="price"
        onChange={handlePrice}
      />
      <input
        type="number"
        value={rating}
        placeholder="rating"
        onChange={handleRating}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddProduct;
