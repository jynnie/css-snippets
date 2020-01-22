import React from "react";

/**
 * @typedef Snippet
 * @property {string} name
 * @property {DOM} html
 * @property {string} css
 * @property {string} hidden styles
 * @property {string} about
 */

// { urlParam: Snippet }
const snippets = {
  empty: {
    name: "404 No Snippet",
    html: (
      <div className="error">You've somehow gotten here without a snippet!</div>
    ),
    css: `.error {
      color: red;
    }`,
    hidden: `div {
      padding: var(--s);
      border: 1px solid var(--dark-grey);
    }`,
    about: "An error was produced",
  },
};

export default snippets;
