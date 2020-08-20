import React from "react";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={logo}
            alt="login logo"
            width="50px"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/")}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
