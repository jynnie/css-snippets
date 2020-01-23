import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Removes four spaces from beginning of all lines except first of css
const removeSpaces = css => {
  let lines = css.split("\n");
  let clean = lines.slice(1).map(l => l.slice(4));
  let all = [lines[0]].concat(clean);
  return all.join("\n");
};

const CodeBlock = styled(({ className, code }) => {
  return (
    <SyntaxHighlighter
      className={classnames(className)}
      language="css"
      style={docco}
      showLineNumbers
      wrapLines
    >
      {removeSpaces(code)}
    </SyntaxHighlighter>
  );
})`
  margin: 0;

  &:hover {
    z-index: 999;
  }
`;

export default CodeBlock;
