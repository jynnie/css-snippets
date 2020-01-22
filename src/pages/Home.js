import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import Container from "../modules/Container";

import "./Home.css";

const Home = styled(({ className }) => {
  return (
    <Container className={classnames(className, "u-flex u-flex-justifyCenter")}>
      <div className="u-textCenter">
        <h1 className="Home-header u-blue">
          welcome to web<span className="u-yellow">.</span>lab
        </h1>
        <div className="Home-descript">
          a collection of common css solutions – lovingly crafted for{" "}
          <a
            className="u-pink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://weblab.mit.edu/"
          >
            weblab.mit.edu
          </a>{" "}
          by jynnie
        </div>
      </div>
    </Container>
  );
})`
  margin-top: 20vh;
`;

export default Home;
