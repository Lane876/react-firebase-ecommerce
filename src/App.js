import React from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  const location = useLocation();
  return (
    <div className="container">
      {location.pathname !== "/login" && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
