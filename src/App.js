import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import app from "./config";
import About from "./components/About";

function App() {
  const location = useLocation();
  const auth = app.auth();
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
      </Switch>
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}
    </div>
  );
}

export default App;
