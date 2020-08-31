import React, { useEffect, useState } from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import app, { db } from "./config";
import About from "./components/About";
import Laptops from "./components/Laptops";
import Phones from "./components/Phones";
import Pcs from "./components/Pcs";

function App() {
  const location = useLocation();
  const auth = app.auth();
  const [laptops, setLaptops] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  

  return (
    <div className="container">
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Header user={user} />
      )}
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <Route
            path="/laptops"
            render={() => <Laptops user={user} laptops={laptops} />}
          />
          <Route path="/phones" render={()=> <Phones user={user} />}/>
          <Route path="/pcs" render={()=> <Pcs user={user} />}/>
        </Switch>
      </AnimatePresence>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/phones" &&
        location.pathname !== "/pcs" &&
        location.pathname !== "/laptops" && <Footer />}
    </div>
  );
}

export default App;
