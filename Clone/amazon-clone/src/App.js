import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckOut from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/checkOut">
            <CheckOut />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
