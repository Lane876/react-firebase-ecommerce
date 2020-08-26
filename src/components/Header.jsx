import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../config";
import { Drawer, Divider, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";

const Header = ({ user }) => {
  const history = useHistory();
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
            to="/men"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">MEN</p>
          </Link>
          <Divider />
          <Link
            to="/women"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">WOMEN</p>
          </Link>
          <Divider />
          <Link
            to="/kids"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setOpen(false)}
          >
            <p className="menu-link">KIDS</p>
          </Link>
        </div>
      </Drawer>
      {/* <div id="header"> */}
      <div className={show ? "headerShow" : "headerHide"}>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
          <div style={{ marginRight: "1rem", cursor: "pointer" }}>
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </div>
          <a href="/">
            <img src={logo} alt="logo" width="20px" />
          </a>
        </div>

        <div style={{ display: "flex" }}>
          {user && (
            <div style={{ marginRight: "1rem" }}>
              Hello, {user?.displayName}
            </div>
          )}
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
