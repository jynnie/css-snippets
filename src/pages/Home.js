import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

import Container from "../modules/Container";
import Listing from "../modules/Listing";

import snippets from "../snippets";

import "./Home.css";

const Home = styled(({ className }) => {
  return (
    <Container
      className={classnames(
        className,
        "u-flex u-flex-alignCenter u-flexColumn",
      )}
    >
      <div className="u-textCenter">
        <h1 className="Home-header u-blue">
          <span className="u-yellow">.</span>class help
        </h1>
        <div className="Home-descript">
          a collection of css solutions for common layouts & styles
          <br />
          lovingly crafted for{" "}
          <a
            className="u-pink"
            target="_blank"
            rel="noopener noreferrer"
            href="http://weblab.mit.edu/"
          >
            weblab.mit.edu
          </a>{" "}
          by{" "}
          <a
            className="u-pink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://jynnie.me/"
          >
            jynnie
          </a>
        </div>
      </div>
      <Box maxWidth={600} width="100%">
        {Object.keys(snippets).map(i => (
          <Listing snippet={snippets[i]} id={i} />
        ))}
      </Box>
    </Container>
  );
})`
  margin-top: 20vh;
`;

export default Home;
