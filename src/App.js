import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="container">
      {location.pathname !== "/login" && location.pathname !==  "/register" && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
    </div>
  );
}

export default App;
