import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../config";
import { Drawer, Divider } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import { Link as Scroll } from "react-scroll";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = ({ user }) => {
  const state = useSelector((state) => state.product.product);
  // const qty = useSelector((state) => state.product.quantity);
  // console.log(qty);

  const history = useHistory();
  const location = useLocation();
  const auth = app.auth();
  const logout = async () => {
    await auth.signOut();
    history.push("/login");
  };

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setShow(true);
    } else {
      setShow(false);
    }

    prevScrollPos = currentScrollPos;
  };
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} className="drawer">
        <div
          style={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              backgroundColor: "#e8e8e8",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <AccountCircleIcon style={{ marginLeft: "1rem" }} />
              {user ? (
                <p style={{ marginLeft: "1rem" }}>
                  Hello,{" "}
                  <span style={{ color: "#ffac33" }}>{user?.displayName}</span>{" "}
                </p>
              ) : (
                <p style={{ marginLeft: "1rem" }}>
                  Hello,{" "}
                  <span
                    onClick={() => history.push("/login")}
                    style={{ cursor: "pointer", color: "#ffac33" }}
                  >
                    Sign In
                  </span>
                </p>
              )}
            </div>
            <CloseIcon
              style={{
                marginRight: "3rem",
                cursor: "pointer",
                fontSize: "2rem",
              }}
              onClick={() => setOpen(false)}
            />
          </div>
          <p style={{ color: "#9e9e9e", marginLeft: "1rem" }}>
            SHOP BY CATEGORY
          </p>
          <Divider />
          <Link
            to="/laptops"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">Laptops</p>
          </Link>
          <Divider />
          <Link
            to="/phones"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">Phones</p>
          </Link>
          <Divider />
          <Link
            to="/pcs"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">Pcs</p>
          </Link>
          <Divider />
          {location.pathname === "/" && (
            <Scroll
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              delay={100}
              isDynamic={true}
              ignoreCancelEvents={false}
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              <p className="menu-link">Contact</p>
            </Scroll>
          )}
        </div>
      </Drawer>
      {/* <div id="header"> */}
      <div className={show ? "headerShow" : "headerHide"}>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
          <div style={{ marginRight: "1rem", cursor: "pointer" }}>
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" width="20px" />
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {user && (
            <div style={{ marginRight: "1rem" }}>
              Hello, {user?.displayName}
            </div>
          )}
          <div style={{ position: "relative" }}>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "#f4f4f4" }}
            >
              <AiOutlineShoppingCart
                size="30px"
                style={{ marginRight: "3.5rem" }}
              />
              {state.length !== 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "-7px",
                    left: "18px",
                    borderRadius: "50%",
                    backgroundColor: "orange",
                    width: "1.5rem",
                    height: "1.5rem",
                    color: "black",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {state.length}
                  {/* {qty} */}
                </div>
              )}
            </Link>
          </div>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#fff",
              marginRight: "1rem",
            }}
          >
            {user ? <div onClick={logout}>Sign Out</div> : <div>Sign In</div>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
