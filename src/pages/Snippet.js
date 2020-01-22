import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

import CodeBlock from "../modules/CodeBlock";
import Container from "../modules/Container";

const Snippet = styled(({ className }) => {
  let code = `.Home-yellow {
  color: var(--yella);
}

.Home-logo {
  max-width: 160px;
  margin: 1em;
}
`;

  return (
    <Container className={classnames(className)}>
      <h1>Snippet Name</h1>
      <Box className="grid">
        <div>Preview</div>
        <CodeBlock code={code} />
      </Box>
    </Container>
  );
})`
  .grid {
    display: grid;
    grid-template-columns: 400px 1fr;
  }
`;

export default Snippet;
