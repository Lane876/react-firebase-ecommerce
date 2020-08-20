import React from "react";
import logo from "../images/logo.png";
import google from "../images/google.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";

const Register = () => {
  return (
    <div className="login-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/" style={{ margin: "0 auto" }}>
          <img src={logo} alt="logo login" width="70px" />
        </Link>
        <p style={{ color: "#209cee", fontWeight: "600" }}>Sing Up</p>

        <input
          style={{
            maxWidth: "450px",
            marginBottom: "1rem",
            padding: ".5rem",
            borderRadius: "5px",
            border: "1px solid #209cee",
            outlineColor: "#209cee",
          }}
          placeholder="name"
          type="text"
        />
        <input
          style={{
            maxWidth: "450px",
            marginBottom: "1rem",
            padding: ".5rem",
            borderRadius: "5px",
            border: "1px solid #209cee",
            outlineColor: "#209cee",
          }}
          placeholder="email"
          type="email"
        />
        <input
          style={{
            maxWidth: "450px",
            padding: ".5rem",
            borderRadius: "5px",
            border: "1px solid #209cee",
            outlineColor: "#209cee",
          }}
          placeholder="password"
          type="password"
        />
        <button
          style={{
            marginTop: "1rem",
            padding: ".5rem",
            border: "1px solid #209cee",
            borderRadius: "8px",
            outlineColor: "#209cee",
            backgroundColor: "#209cee",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          submit
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: "#209cee",
              fontWeight: "600",
            }}
          >
            Forgot password?
          </Link>
        </p>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "#209cee",
              fontWeight: "600",
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          margin: "0 auto",
          justifyContent: "space-between",
          maxWidth: "500px",
          alignItems: "center",
        }}
      >
        <div style={{ width: "220px", border: ".5px solid #209cee" }} />
        <p style={{ margin: "0.5rem" }}>Or</p>
        <div style={{ width: "220px", border: ".5px solid #209cee" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: ".5px solid #209cee",
            borderRadius: "8px",
            outlineColor: "#209cee",
            width: "45%",
            cursor: "pointer",
          }}
        >
          <img src={google} alt="google" width="20px" />
          <p style={{ marginLeft: "10px" }}>Sign In with Google</p>
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            border: ".5px solid #209cee",
            borderRadius: "8px",
            outlineColor: "#209cee",
            width: "45%",
            cursor: "pointer",
          }}
        >
          <FacebookIcon style={{ color: "#4267b2", marginRight: "10px" }} />
          Sign In with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
