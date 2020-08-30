import React from "react";
import { db } from "../config";

const AddProduct = ({ values, setValues, initialState, setIsOpen, add }) => {
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
    setIsOpen(false)
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <select onChange={handleInput} value={values.option} name="option" className='inputFields'>
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
        className='inputFields'
      />
      <input
        type="text"
        name="desc"
        value={values.desc}
        placeholder="description"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="number"
        name="price"
        value={values.price}
        placeholder="price"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="number"
        name="rating"
        value={values.rating}
        placeholder="rating"
        onChange={handleInput}
        className='inputFields'
      />
      <button className='inputBtn' type="submit">{add ? 'ADD' : "UPDATE"}</button>
    </form>
  );
};

export default AddProduct;
