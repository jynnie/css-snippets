import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = styled(({ className, code }) => {
  return (
    <SyntaxHighlighter
      className={classnames(className)}
      language="css"
      style={docco}
      showLineNumbers
      wrapLines
    >
      {code}
    </SyntaxHighlighter>
  );
})`
  //   width: 600px;
`;

export default CodeBlock;
