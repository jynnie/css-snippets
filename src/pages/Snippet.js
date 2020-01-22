import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

import CodeBlock from "../modules/CodeBlock";
import Container from "../modules/Container";
import Preview from "../modules/Preview";

const Snippet = styled(({ className }) => {
  let css = `.Test-yellow {
  color: var(--yella);
}
`;

  let hidden = `.Test-yellow {
    padding: var(--s);
    border: 1px solid var(--dark-grey);
  }`;

  return (
    <Container className={classnames(className)}>
      <h1>Snippet Name</h1>
      <Box className="grid">
        <Preview
          html={<div className="Test-yellow">Preview</div>}
          css={css}
          hiddenStyles={hidden}
        />
        <CodeBlock code={css} />
      </Box>
    </Container>
  );
})`
  .grid {
    display: grid;
    grid-template-columns: 460px 1fr;
    grid-gap: var(--m);
  }

  h1 {
    color: var(--silver-text);
  }
`;

export default Snippet;
