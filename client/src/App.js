import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./views/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ProductDeatails from "./views/ProductDetails";
import MyAppBar from "./components/MyAppBar";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/productdetails">product details</Link>
            </li>
          </ul>
        </nav>
        <div>
          <MyAppBar />
          <Switch>
            <Route path="/about/:id">
              <About />
            </Route>
            <Route path="/productdetails/:id">
              <ProductDeatails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
