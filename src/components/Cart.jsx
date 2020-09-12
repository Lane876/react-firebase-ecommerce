import React from "react";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";
import { removeProduct, clearCart, dec, inc } from "../redux/cart/cartActions";
import { IoMdClose } from "react-icons/io";
import { FaRegSadCry } from "react-icons/fa";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { GET_TOTAL } from "../redux/types";
import StripeButton from "./StripeButton";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.product.product);
  const total = useSelector((state) => state.product.total);
  const option = useSelector((state) => state.product.option);
  const [opt, setOpt] = useState("");
  console.log(opt);

  const arr = products.length;

  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch({ type: GET_TOTAL });
  }, [products]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {arr === 0 ? (
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span> Your Cart is Empty </span>{" "}
          <FaRegSadCry
            size="40px"
            style={{ padding: "1rem", color: "orange" }}
          />
        </h2>
      ) : (
        <div
          style={{
            paddingTop: "5rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            flexWrap: "wrap",
            width: "80%",
            margin: "0 auto",
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={product.image_def}
                    style={{
                      width: "100px",
                      padding: "1rem",
                      cursor: "pointer",
                    }}
                    alt="cartimage"
                    onClick={() => {
                      if (product.option === "Laptops") {
                        history.push(`/laptop/${product.id}`);
                      }
                      if (product.option === "Phones") {
                        history.push(`/phone/${product.id}`);
                      }
                      if (product.option === "Pcs") {
                        history.push(`/pc/${product.id}`);
                      }
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    padding: "1rem",
                  }}
                >
                  <div>{product.title}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "300px",
                  padding: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <AiOutlineLeft
                    size="20px"
                    onClick={() => dispatch(dec(product))}
                    style={{ cursor: "pointer", paddingRight: "15px" }}
                  />
                  {product.quantity}
                  <AiOutlineRight
                    size="20px"
                    onClick={() => dispatch(inc(product))}
                    style={{ cursor: "pointer", paddingLeft: "15px" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  Price: ${product.price * product.quantity}
                </div>
                <div
                  style={{
                    color: "tomato",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => dispatch(removeProduct(product))}
                >
                  <IoMdClose size="30px" />
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              width: "100%",
              border: ".5px solid #ffac33",
              marginBottom: "2rem",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <button onClick={handleClear} className="landingbtn">
              CLEAR CART
            </button>
            <h2>Total: ${total}</h2>
            <StripeButton price={total} />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
