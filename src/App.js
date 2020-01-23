import React from "react";
import { Router } from "@reach/router";

import Nav from "./modules/Nav";
import Home from "./pages/Home";
import Snippet from "./pages/Snippet";
import NotFound from "./pages/NotFound";

import HamburgerSnippet from "./pages/snippets/Hamburger";

import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Home path="/" />

        <HamburgerSnippet exact path="/snippet/hamburger" />

        <Snippet path="/snippet/:snipId" />
        <Snippet path="/snippet" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
