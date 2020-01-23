import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";
import { Link } from "@reach/router";

import snippets from "../snippets";

const RelatedListings = styled(({ className, related }) => {
  return (
    <Box className={classnames(className, "u-flex")}>
      {related.map((s, i) => (
        <Link className="related" key={i} to={`/snippet/${s}`}>
          {snippets[s].name}
        </Link>
      ))}
    </Box>
  );
})`
  .related {
    margin: 0 var(--m) var(--m) 0;
    padding: var(--s) var(--m);
    border-radius: var(--radius-s);
    background-color: var(--silver);
    color: var(--black);
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }

  .related:hover {
    transform: scale(1.1);
  }

  .related:active {
    background-color: var(--silver-focus);
  }
`;

export default RelatedListings;
