import React from "react";
import { Router } from "@reach/router";

import Home from "./pages/Home";
import Snippet from "./pages/Snippet";
import Nav from "./modules/Nav";

import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Home path="/" />
        <Snippet path="/snippet" />
      </Router>
    </>
  );
};

export default App;
