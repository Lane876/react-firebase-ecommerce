import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct, clearCart } from "../redux/cart/cartActions";
import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);
  const quantity = useSelector((state) => state.product.quantity);

  const arr = products.length;

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div
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
          }}
        >
          Your Cart is Empty
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
              style={{ display: "flex", justifyContent: "space-between", width:"100%" }}
            >
                <div style={{display:"flex"}}>

              <div>
                <img
                  src={product.image_def}
                  style={{ width: "100px", padding:"1rem" }}
                  alt="cartimage"
                  />
              </div>
              <div
                style={{
                    display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                  padding:"1rem"
                }}
                >
                <div>{product.title}</div>
                <div>${product.price}</div>
              </div>
              </div>
              <div
                style={{ color: "tomato", cursor: "pointer", padding:"1rem" }}
                onClick={() => dispatch(removeProduct(product))}
                >
                <IoMdClose size="30px" />
              </div>
            </div>
          ))}
          <div style={{ width: "100%", border: ".5px solid #ffac33", marginBottom:"2rem" }} />
          <button onClick={handleClear}>Clear cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
