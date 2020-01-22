import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Link } from "@reach/router";

const Nav = styled(({ className }) => {
  return (
    <div className={classnames(className, "u-flex u-flexJustifyBetweeen")}>
      <Link className="Nav-header" to="/">
        css snippets
      </Link>
      <div className="Nav-linkContainer"></div>
    </div>
  );
})`
  margin: var(--xl) 72px 0;

  .Nav-header {
    font-family: var(--headerFont);
    font-weight: 600;
    font-size: 1.2em;
    color: var(--s-blue);
    text-decoration: none;
  }

  .Nav-link {
    text-decoration: none;
    color: var(--s-black);
    font-weight: 600;
    margin-right: 32px;
  }

  .Nav-link:hover {
    color: var(--s-grey);
  }

  .Nav-login {
    background: var(--s-black);
    padding: 0.5em 1.5em;
    border-radius: var(--radius-sm);
    text-decoration: none;
    color: var(--s-white);
  }

  .Nav-login:hover {
    background: var(--s-grey);
  }

  @media screen and (max-width: 640px) {
    & {
      margin: 36px 1em 0;
    }
  }
`;

export default Nav;
