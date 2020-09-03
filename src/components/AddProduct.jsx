import React from "react";
import { db } from "../config";
import { v4 as uuidv4 } from 'uuid';

const AddProduct = ({ values, setValues, initialState, setIsOpen, add, setAdd }) => {
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
        id: values.id || "",
        title: values.title || "",
        option: values.option || '',
        image_def: values.image_def || '',
        image_1: values.image_1 || '',
        image_2: values.image_2 || '',
        image_3: values.image_3 || '',
        desc: values.desc || '',
        price: values.price || '',
        rating: values.rating || '',
      });
    } else {
      await db.collection(`${values.option}`).doc(values.id).set({
        option: values.option || '',
        title: values.title || '',
        image_def: values.image_def || '',
        image_1: values.image_1 || '',
        image_2: values.image_2 || '',
        image_3: values.image_3 || '',
        desc: values.desc || '',
        price: values.price || '',
        rating: values.rating || '',
      });
    }

    setValues(initialState);
    setIsOpen(false)
    setAdd(false)
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
        value={values.image_def}
        name="image_def"
        placeholder="default image link"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="text"
        value={values.image_1}
        name="image_1"
        placeholder="image 1 link"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="text"
        value={values.image_2}
        name="image_2"
        placeholder="image 2 link"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="text"
        value={values.image_3}
        name="image_3"
        placeholder="image 3 link"
        onChange={handleInput}
        className='inputFields'
      />
      <input
        type="text"
        name="title"
        value={values.title}
        placeholder="title"
        onChange={handleInput}
        className='inputFields'
      />
      <textarea
        style={{height:"60px", fontFamily:"inherit"}}
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
