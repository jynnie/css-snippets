import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";
import { Link } from "@reach/router";

/**
 * @param {Snippet} snippet
 * @param {string} id for url link to /snippet/id
 */
const Listing = styled(({ className, snippet, id }) => {
  let { name, about } = snippet;
  return (
    <Link className={classnames(className)} to={`/snippet/${id}`}>
      <Box>Preview</Box>
      <Box>
        <Box className="u-bold">{name}</Box>
        <Box>{about}</Box>
      </Box>
    </Link>
  );
})`
  width: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: var(--m);
  padding: var(--m) var(--l);
  background-color: var(--silver);
  border-radius: var(--radius-m);
  transition: background 0.2s, transform 0.2s;
  cursor: u-pointer;

  text-decoration: none;
  color: var(--black);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background-color: var(--silver-focus);
  }
`;

export default Listing;
