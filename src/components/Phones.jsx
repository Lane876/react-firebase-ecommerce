import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";
import Modal from "react-modal";
import { CgAddR } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

Modal.setAppElement("#root");

const Phones = ({ user }) => {
  const admin = user?.uid === "hwdNGlf4e4Qh8488jCJlxpOjEwl1";
  const [phones, setPhones] = useState([]);
  const initialState = {
    id: "add",
    option: "Phones",
    image: "",
    desc: "",
    price: "",
    rating: "",
  };

  const [values, setValues] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    db.collection("Phones").onSnapshot((snapshot) => {
      setPhones(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleDelete = async (id) => {
    await db.collection("Phones").doc(id).delete();
  };

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

  const handleEdit = (phone) => {
    setValues(phone);
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
      return item.desc.toLowerCase().includes(search.toLowerCase()) || !search;
    };
  };

  return (
    <motion.div
      className="phones"
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
                maxWidth: "450px",
                maxHeight: "450px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
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
        {phones.filter(searchResult(search)).map((phone, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "2rem",
              width:"200px",
              height:"400px",
              border:".2px solid lightgray",
              borderRadius:"5px",
              margin:"1rem"

            }}
          >
            <img src={phone.image} width='100%' />
            <p style={{wordBreak:"break-word"}}>{phone.desc}</p>
            <p>Price: ${phone.price}</p>
            <p>Rating: {phone.rating}</p>
            {!admin && <button className="addToCartBtn">add to cart</button>}
            {admin && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(phone)}
                  >
                    <AiFillEdit size="30px" style={{ color: "orange" }} />
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => submit(phone.id)}
                  >
                    <MdDeleteForever size="30px" style={{ color: "red" }} />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        {/* <div>{JSON.stringify(phones)}</div> */}
      </div>
    </motion.div>
  );
};

export default Phones;
