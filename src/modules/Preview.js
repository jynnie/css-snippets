import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

// Removes four spaces from beginning of all lines except first of css
const removeSpaces = css => {
  let lines = css.split("\n");
  let clean = lines.slice(1).map(l => l.slice(4));
  let all = [lines[0]].concat(clean);
  return all.join("\n");
};

/**
 * Takes a string of css classes, and for every class, creates
 * a pseudo ::after element that displays the name of the class
 *
 * @param {string} css
 */
const AddClassAfter = css => {
  let lines = removeSpaces(css).split("\n");
  let classes = lines.filter(l => l[0] === ".");
  let classNames = classes.map(c => c.split(" ")[0].slice(1));
  let afters = classNames.map(
    c => `    
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
  console.log(classNames);
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

  div {
    padding: var(--s);
    border: 1px solid var(--dark-grey);
  }
  
  .ignore {
    background: var(--silver);
    border-color: var(--silver-focus);
  }
`;

export default Preview;
