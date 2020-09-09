import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";
import Modal from "react-modal";
import { CgAddR } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import { getProduct } from "../redux/cart/cartActions";

Modal.setAppElement("#root");

const Pcs = ({ user }) => {
  const admin = user?.uid === "hwdNGlf4e4Qh8488jCJlxpOjEwl1";
  const dispatch = useDispatch()
  const [pcs, setPcs] = useState([]);
  const initialState = {
    id: "add",
    option: "Pcs",
    image_def: "",
    image_1: "",
    image_2: "",
    image_3: "",
    desc: "",
    title: "",
    price: "",
    rating: "",
    unique: uuidv4(),
    quantity: 1,
  };

  const [values, setValues] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    db.collection("Pcs").onSnapshot((snapshot) => {
      setPcs(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const submit = (id) =>
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              border: "1px solid orange",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 205, 97, 0.7)",
            }}
          >
            <h1>Are you sure?</h1>
            <div>You want to delete this file?</div>
            <div
              style={{
                display: "flex",
                width: "300px",
                justifyContent: "space-around",
                marginTop: "2rem",
              }}
            >
              <button className="confirmBtn" onClick={onClose}>
                No
              </button>
              <button
                className="confirmBtn"
                onClick={() => {
                  handleDelete(id);
                  onClose();
                }}
              >
                Yes
              </button>
            </div>
          </div>
        );
      },
    });

  const handleDelete = async (id) => {
    await db.collection("Pcs").doc(id).delete();
  };

  const handleEdit = (pc) => {
    setValues(pc);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setIsOpen(true);
    setAdd(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setAdd(false);
    setValues(initialState);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchResult = (search) => {
    return function (item) {
      return item.title.toLowerCase().includes(search.toLowerCase()) || !search;
    };
  };

  return (
    <motion.div
      className="pcs"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {admin && (
        <>
          <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            style={{
              overlay: {
                backgroundColor: "rgba(0,0,0,.5)",
              },
              content: {
                backgroundColor: "#f4f4f4",
                maxWidth: "550px",
                height: "470px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "5px",
              },
            }}
          >
            <AddProduct
              values={values}
              setValues={setValues}
              initialState={initialState}
              setIsOpen={setIsOpen}
              add={add}
              setAdd={setAdd}
            />
          </Modal>
        </>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search..."
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
        {admin && (
          <div
            style={{ cursor: "pointer", marginLeft: "3rem" }}
            onClick={handleAdd}
          >
            <CgAddR size="30px" style={{ color: "green" }} />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {pcs.filter(searchResult(search)).map((pc, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "2rem",
              width: "200px",
              height: "400px",
              border: ".2px solid lightgray",
              borderRadius: "5px",
              margin: "1rem",
              position: "relative",
            }}
          >
            <Link to={`/pc/${pc.id}`}>
              <img
                src={pc.image_def}
                width="100%"
                style={{ height: "200px" }}
                alt="pcs"
              />
            </Link>
            <p>{pc.title}</p>
            <p>Price: ${pc.price}</p>
            <p>Rating: {pc.rating}</p>
            <button className="addToCartBtn" style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
              <Link to={`/pc/${pc.id}`} style={{textDecoration:"none", color:"orange"}} >
                <span>DETAILS</span> 
                </Link> <AiOutlineShoppingCart size='25px' onClick={()=>dispatch(getProduct(pc))} /> </button>
            {admin && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(pc)}
                  >
                    <AiFillEdit size="30px" style={{ color: "orange" }} />
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => submit(pc.id)}
                  >
                    <MdDeleteForever size="30px" style={{ color: "red" }} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        {/* <div>{JSON.stringify(pcs)}</div> */}
      </div>
    </motion.div>
  );
};

export default Pcs;
