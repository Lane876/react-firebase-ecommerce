import React from "react";
import { db } from "../config";

const AddProduct = ({ info, values, setValues, initialState }) => {
  function handleInput(e) {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.id === "add") {
      await db.collection(`${values.option}`).add({
        ...values,
        option: values.option,
        image: values.image,
        desc: values.desc,
        price: values.price,
        rating: values.rating,
      });
    } else {
      await db.collection(`${values.option}`).doc(values.id).set({
        option: values.option,
        image: values.image,
        desc: values.desc,
        price: values.price,
        rating: values.rating,
      });
    }

    setValues(initialState);
  };

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
      <select onChange={handleInput} value={values.option} name="option">
        <option>Laptops</option>
        <option>Phones</option>
        <option>Pcs</option>
      </select>
      <input
        type="text"
        value={values.image}
        name="image"
        placeholder="image link"
        onChange={handleInput}
      />
      <input
        type="text"
        name="desc"
        value={values.desc}
        placeholder="description"
        onChange={handleInput}
      />
      <input
        type="number"
        name="price"
        value={values.price}
        placeholder="price"
        onChange={handleInput}
      />
      <input
        type="number"
        name="rating"
        value={values.rating}
        placeholder="rating"
        onChange={handleInput}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddProduct;
