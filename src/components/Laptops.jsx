import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";
import Modal from 'react-modal'
import {CgAddR} from 'react-icons/cg'
import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'



Modal.setAppElement('#root')

const Laptops = ({ user, laptops }) => {
  const admin = user?.uid === "hwdNGlf4e4Qh8488jCJlxpOjEwl1";
  const initialState = {
    id: "add",
    option: "Laptops",
    image: "",
    desc: "",
    price: "",
    rating: "",
  };

  const [values, setValues] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [add, setAdd] = useState(false)

  const handleDelete = async (id) => {
    if(window.confirm('Are you sure?')){
      await db.collection("Laptops").doc(id).delete();

    }
  };

  const handleEdit = (laptop) => {
    setValues(laptop);
    setIsOpen(true)
  };

  const handleAdd = () =>{
    setIsOpen(true)
    setAdd(true)
  }
  const handleClose = () =>{
    setIsOpen(false)
    setAdd(false)
    setValues(initialState)
  }

  return (
    <motion.div
      className="laptops"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {admin && (
        <>
        <Modal isOpen={isOpen} onRequestClose={handleClose} style={{overlay:{
          backgroundColor:"rgba(0,0,0,.5)"
        }, content:{
          backgroundColor:'#f4f4f4',
          maxWidth:"450px",
          maxHeight:"450px",
          top:"50%",
          left:"50%",
          transform:"translate(-50%, -50%)"
        }}}>

        <AddProduct
          values={values}
          setValues={setValues}
          initialState={initialState}
          setIsOpen={setIsOpen}
          add={add}
          />
          </Modal>
        </>
      )}
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
      <div style={{cursor:"pointer", marginLeft:"3rem"}} onClick={handleAdd}><CgAddR size='30px' style={{color:"green"}}/></div>
      </div>
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
              padding: "2rem",
            }}
          >
            <img src={laptop.image} width="200px" />
            <p>{laptop.desc}</p>
            <p>Price: ${laptop.price}</p>
            <p>Rating: {laptop.rating}</p>
            {!admin && <button>add to cart</button>}
            {admin && (
              <>
                <div
                  style={{ display: "flex", justifyContent: "space-between", width:"100%" }}
                >
                  <div style={{cursor:"pointer"}} onClick={() => handleEdit(laptop)}>
                    <AiFillEdit size='30px' style={{color:"orange"}}/>
                  </div>
                  <div style={{cursor:"pointer"}} onClick={() => handleDelete(laptop.id)}>
                    <MdDeleteForever size='30px' style={{color:"red"}}/>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        {/* <div>{JSON.stringify(laptops)}</div> */}
      </div>
    </motion.div>
  );
};

export default Laptops;
