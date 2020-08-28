import React, { useState } from "react";
import logo from "../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useHistory } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import app from "../config";
import firebase from "firebase";
import { motion } from "framer-motion";

const Login = () => {
  const auth = app.auth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const login = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      setErrors(error.message);
    }
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  const authWithGoogle = async () => {
    await firebase.auth().signInWithPopup(provider);
    history.push("/");
  };

  const fbprovider = new firebase.auth.FacebookAuthProvider();
  const authWithFacebook = async () => {
    await firebase.auth().signInWithPopup(fbprovider);
    history.push("/");
  };

  const resetPassword = async () => {
    await auth.sendPasswordResetEmail(email);
    alert("Check your email for password reset");
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <motion.div
      className="login-container"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="lg">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Link to="/" style={{ margin: "0 auto" }}>
            <img src={logo} alt="logo login" width="70px" />
          </Link>
          <p style={{ color: "#ffac33", fontWeight: "600" }}>Sing In</p>
          <input
            style={{
              maxWidth: "450px",
              marginBottom: "1rem",
              padding: ".5rem",
              borderRadius: "5px",
              border: "1px solid #ffac33",
              outlineColor: "#ffac33",
            }}
            value={email}
            onChange={handleEmail}
            placeholder="email"
            type="email"
          />
          <input
            style={{
              maxWidth: "450px",
              padding: ".5rem",
              borderRadius: "5px",
              border: "1px solid #ffac33",
              outlineColor: "#ffac33",
            }}
            value={password}
            onChange={handlePassword}
            placeholder="password"
            type="password"
          />
          {errors && <p style={{ color: "red" }}>{errors}</p>}
          <button
            style={{
              marginTop: "1rem",
              padding: ".5rem",
              border: "1px solid #ffac33",
              borderRadius: "8px",
              outlineColor: "#ffac33",
              backgroundColor: "#ffac33",
              color: "#fff",
              fontWeight: "600",
              cursor: "pointer",
            }}
            type="submit"
            onClick={login}
          >
            submit
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "#ffac33",
                fontWeight: "600",
              }}
              onClick={resetPassword}
            >
              Forgot password?
            </Link>
          </p>
          <p>
            You dont have an account?{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#ffac33",
                fontWeight: "600",
              }}
            >
              Sign Up
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
            paddingBottom: "2rem",
          }}
        >
          <div style={{ width: "220px", border: ".5px solid #ffac33" }} />
          <p style={{ margin: "0.5rem" }}>Or</p>
          <div style={{ width: "220px", border: ".5px solid #ffac33" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: ".5px solid #ffac33",
              borderRadius: "8px",
              outlineColor: "#ffac33",
              width: "45%",
              cursor: "pointer",
            }}
            onClick={authWithGoogle}
          >
            <FcGoogle size="20px" />
            <p style={{ marginLeft: "10px" }}>Sign In with Google</p>
          </button>
          <button
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: ".5px solid #ffac33",
              borderRadius: "8px",
              outlineColor: "#ffac33",
              width: "45%",
              cursor: "pointer",
            }}
            onClick={authWithFacebook}
          >
            <FacebookIcon style={{ color: "#4267b2", marginRight: "10px" }} />
            Sign In with Facebook
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
