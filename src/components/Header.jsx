import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "1rem" }}>
          <MenuIcon fontSize="large" />
        </div>
        <Link to="/">
          <img src={logo} alt="logo" width="50px" />
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "1rem" }}>Hello, Milan</div>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <div>Sign out</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
