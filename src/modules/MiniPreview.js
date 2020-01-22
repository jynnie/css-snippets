import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

/**
 * @param html
 * @param css
 * @param hiddenStyles
 * @param {bool} static removes hover effects
 */
const Mini = styled(({ className, html }) => {
  return <Box className={classnames(className, "u-relative")}>{html}</Box>;
})`
  padding: 1px;
  font-size: 6px;
  background: var(--white);
  border-radius: var(--radius-s);
  overflow: hidden;

  ${props => props.hiddenStyles}

  ${props => props.css}
`;

export default Mini;
