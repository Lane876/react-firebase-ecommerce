import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import AddProduct from "./AddProduct";
import { db } from "../config";
import Modal from "react-modal";
import { CgAddR } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { getProduct, option } from "../redux/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";

Modal.setAppElement("#root");

const Laptops = ({ user }) => {
  const admin = user?.uid === "hwdNGlf4e4Qh8488jCJlxpOjEwl1";
  const dispatch = useDispatch();
  const initialState = {
    id: "add",
    option: "Laptops",
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
  const [laptops, setLaptops] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    db.collection("Laptops").onSnapshot((snapshot) => {
      setLaptops(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const handleDelete = async (id) => {
    await db.collection("Laptops").doc(id).delete();
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

  const handleEdit = (laptop) => {
    setValues(laptop);
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

  const handleSelect = (e) => {
    let select = e.target.value;

    if (select === "Asc") {
      db.collection("Laptops")
        .orderBy("price")
        .get()
        .then((snapshot) => {
          setLaptops(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
          console.log(laptops);
        });
    }
    if (select === "Des") {
      db.collection("Laptops")
        .orderBy("price", "desc")
        .get()
        .then((snapshot) => {
          setLaptops(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
    }
    if (select === "AZ") {
      db.collection("Laptops")
        .orderBy("title", "asc")
        .get()
        .then((snapshot) => {
          setLaptops(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
    }
    if (select === "ZA") {
      db.collection("Laptops")
        .orderBy("title", "desc")
        .get()
        .then((snapshot) => {
          setLaptops(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        });
    }
  };

  return (
    <motion.div
      className="laptops"
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "80%",
          margin: "0 auto",
          paddingBottom: "2rem",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              padding: "1rem",
              width: "400px",
              border: "1px solid orange",
              borderRadius: "8px",
              outlineColor: "orange",
            }}
            onChange={handleSearch}
          />
          <AiOutlineSearch
            size="30px"
            style={{ marginLeft: "-40px", color: "orange" }}
          />
        </div>
        <select
          style={{
            padding: "1rem",
            width: "300px",
            border: "1px solid orange",
            borderRadius: "8px",
            outlineColor: "orange",
            padding: "1rem",
          }}
          onChange={handleSelect}
        >
          <option value="Asc">Sort by price: Ascending</option>
          <option value="Des">Sort by price: Decending</option>
          <option value="AZ">Sort by name: A-Z</option>
          <option value="ZA">Sort by name: Z-A</option>
        </select>
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
        {laptops.filter(searchResult(search)).map((laptop, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              padding: "2rem",
              width: "200px",
              height: "400px",
              border: ".2px solid lightgray",
              borderRadius: "5px",
              margin: "1rem",
              position: "relative",
            }}
          >
            <Link
              to={`/laptop/${laptop.id}`}
              onClick={() => dispatch(option(laptop))}
            >
              <img src={laptop.image_def} width="100%" alt="laptops" />
            </Link>
            <p>{laptop.title}</p>
            <p>Price: ${laptop.price}</p>
            <button
              className="addToCartBtn"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              onClick={() => dispatch(option(laptop))}
            >
              <Link
                to={`/laptop/${laptop.id}`}
                style={{ textDecoration: "none", color: "orange" }}
                onClick={() => dispatch(option(laptop))}
              >
                <span>DETAILS</span>
              </Link>{" "}
              <AiOutlineShoppingCart
                size="25px"
                onClick={() => dispatch(getProduct(laptop), option(laptop))}
              />{" "}
            </button>

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
                    onClick={() => handleEdit(laptop)}
                  >
                    <AiFillEdit size="30px" style={{ color: "orange" }} />
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => submit(laptop.id)}
                  >
                    <MdDeleteForever size="30px" style={{ color: "red" }} />
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
