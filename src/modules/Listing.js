import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";
import { Link } from "@reach/router";

import Mini from "./MiniPreview";

/**
 * @param {Snippet} snippet
 * @param {string} id for url link to /snippet/id
 */
const Listing = styled(({ className, snippet, id }) => {
  let { name, about, html, css, hidden } = snippet;
  return (
    <Link className={classnames(className)} to={`/snippet/${id}`}>
      <Mini html={html} css={css} hiddenStyles={hidden} />
      <Box>
        <Box className="u-bold">{name}</Box>
        <Box>{about}</Box>
      </Box>
    </Link>
  );
})`
  width: calc(100% - 48px);
  min-height: 100px;
  padding: var(--m) var(--l);
  margin-bottom: var(--xl);

  display: grid;
  grid-template-columns: 140px 1fr;
  grid-gap: var(--l);

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

  @media screen and (max-width: 640px) {
    grid-template-columns: 100px 1fr;
  }
`;

export default Listing;
