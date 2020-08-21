import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../config";
import { Drawer, Divider } from "@material-ui/core";
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
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
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
                <p style={{ marginLeft: "1rem" }}>Hello, {user?.displayName}</p>
              ) : (
                <p style={{ marginLeft: "1rem" }}>
                  Hello,{" "}
                  <span
                    onClick={() => history.push("/login")}
                    style={{ cursor: "pointer", color: "#209cee" }}
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
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            <p className="menu-link">MEN</p>
          </Link>
          <Divider />
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            <p className="menu-link">WOMEN</p>
          </Link>
          <Divider />
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            <p className="menu-link">KIDS</p>
          </Link>
          <Divider />
          <Link to="/shirts" style={{ textDecoration: "none", color: "black" }}>
            <p className="menu-link">SHIRTS</p>
          </Link>
          <Divider />
          <Link to="/jeans" style={{ textDecoration: "none", color: "black" }}>
            <p className="menu-link">JEANS</p>
          </Link>
          <Divider />
          <Link
            to="/sneakers"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="menu-link">SNEAKERS</p>
          </Link>
          <Divider />
          <Link
            to="/jackets"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="menu-link">JACKETS</p>
          </Link>
        </div>
      </Drawer>
      <div className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem", cursor: "pointer" }}>
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </div>
          {/* <Link to="/">
            <img src={logo} alt="logo" width="50px" />
          </Link> */}
        </div>

        <div style={{ display: "flex" }}>
          {user && (
            <div style={{ marginRight: "1rem" }}>
              Hello, {user?.displayName}
            </div>
          )}
          <Link to="/login" style={{ textDecoration: "none", color:"#000" }}>
            {user ? <div onClick={logout}>Sign Out</div> : <div>Sign In</div>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
