import React, { useState } from "react";
import logo from "../images/logo.png";
import google from "../images/google.png";
import { Link, useHistory } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import app from "../config";
import firebase from "firebase";

const Register = () => {
  const history = useHistory();
  const auth = app.auth();
  const [errors, setErrors] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const newUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      history.push("/");
      return await newUser.user.updateProfile({
        displayName: name,
      });
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

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="login-container">
      <div className="lg">
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
            value={name}
            onChange={handleChangeName}
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
            value={email}
            onChange={handleChangeEmail}
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
            value={password}
            onChange={handleChangePassword}
          />
          {errors && <p style={{ color: "red" }}>{errors}</p>}

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
            type="submit"
            onClick={registerUser}
          >
            submit
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p></p>
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
            onClick={authWithGoogle}
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
    </div>
  );
};

export default Register;
