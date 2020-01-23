import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";
import { Link } from "@reach/router";

import CodeBlock from "../modules/CodeBlock";
import Container from "../modules/Container";
import Preview from "../modules/Preview";

import snippets from "../snippets";

const Snip = styled(({ className, snip }) => {
  return (
    <div className={classnames(className)}>
      <h2>{snip.name}</h2>
      <p>{snip.about}</p>
      <Box className="grid">
        <Preview html={snip.html} css={snip.css} hiddenStyles={snip.hidden} />
        <CodeBlock code={snip.css} />
      </Box>
    </div>
  );
})`
  .grid {
    display: grid;
    grid-template-columns: 460px 1fr;
    grid-gap: var(--m);
  }

  @media screen and (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

const Snippet = styled(({ className, snipId }) => {
  let snip = snippets[snipId];
  if (!snip) {
    snip = snippets.empty;
  }

  return (
    <Container className={classnames(className)}>
      <h1>{snip.name}</h1>
      <p>{snip.about}</p>
      <Box className="grid">
        <Preview html={snip.html} css={snip.css} hiddenStyles={snip.hidden} />
        <CodeBlock code={snip.css} />
      </Box>
      {snip.related && (
        <>
          <h2>Related Snippets</h2>
          <div className="u-flex">
            {snip.related.map((s, i) => (
              <Link className="related" key={i} to={`/snippet/${s}`}>
                {snippets[s].name}
              </Link>
            ))}
          </div>
        </>
      )}
      {/* {snip.examples && snip.examples.length > 0 && <h1>Example Uses</h1>} */}
      {/* {snip.examples && snip.examples.map((e, i) => <Snip key={i} snip={e} />)} */}
    </Container>
  );
})`
  .grid {
    display: grid;
    grid-template-columns: 460px 1fr;
    grid-gap: var(--m);
  }

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

  @media screen and (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Snippet;
