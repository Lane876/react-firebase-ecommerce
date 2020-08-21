import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import app from "../config";
import { Drawer } from "@material-ui/core";

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
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            width: "400px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src={logo} alt="menu logo" width="50px" />
        </div>
      </Drawer>
      <div className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "1rem", cursor: "pointer" }}>
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" width="50px" />
          </Link>
        </div>

        <div style={{ display: "flex" }}>
          {user && (
            <div style={{ marginRight: "1rem" }}>
              Hello, {user?.displayName}
            </div>
          )}
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            {user ? <div onClick={logout}>Sign Out</div> : <div>Sign In</div>}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
