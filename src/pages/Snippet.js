import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

import CodeBlock from "../modules/CodeBlock";
import Container from "../modules/Container";
import Preview from "../modules/Preview";

import snippets from "../snippets";

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
    </Container>
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

export default Snippet;
