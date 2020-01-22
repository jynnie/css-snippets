import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

/**
 * Takes a string of css classes, and for every class, creates
 * a pseudo ::after element that displays the name of the class
 *
 * @param {string} css
 */
const AddClassAfter = css => {
  let lines = css.split("\n");
  let classes = lines.filter(l => l[0] === ".");
  let classNames = classes.map(c => c.split(" ")[0].slice(1));
  let afters = classNames.map(
    c => `
  .${c} {
    position: relative;
  }
    
  .${c}::after {
    content: ".${c}";
    display: none;
    background-color: var(--black);
    color: var(--white);
    padding: var(--xs) var(--s);
    border-radius: var(--radius-s) 0 var(--radius-s) var(--radius-s);
    position: absolute;
    top: 0;
    right: 0;
  }
  .${c}:hover::after {
    display: inline-block;
  }
  `,
  );
  return afters.join("\n");
};

/**
 * @param html
 * @param css
 * @param hiddenStyles
 */
const Preview = styled(({ className, html }) => {
  return <Box className={classnames(className, "u-relative")}>{html}</Box>;
})`
  ${props => props.hiddenStyles}

  ${props => props.css}

  ${props => props.css && AddClassAfter(props.css)}
`;

export default Preview;
