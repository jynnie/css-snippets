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
  pos_abs: {
    name: "Absolutely Position a Box",
    html: (
      <div className="parent">
        <div className="ignore">Ignored</div>
        <div className="absChild">Absolutely Here</div>
      </div>
    ),
    css: `.parent {
      position: relative;
      height: 400px;
    }
    
    .absChild {
      position: absolute;
      top: 40px;
      left: 60px;
    }`,
    hidden: `&.mini .parent {
      height: var(--max-height);
    }

    &.mini .absChild {
      top: 20px;
      left: 30px;
    }
    `,
    about:
      "Position a div in a specific place, ignoring other content in the parent. Useful for putting pop ups and tooltips in their place.",
  },
  center_abs: {
    name: "Absolutely Center a Box",
    html: (
      <div className="parent">
        <div className="ignore">Ignored</div>
        <div className="centerChild">Centered!</div>
      </div>
    ),
    css: `.parent {
      position: relative;
      height: 300px;
    }
    
    .centerChild {
      position: absolute;
      padding: 8px;
      width: 100px;
      height: 40px;
      
      /* Subtract padding and 1/2 of width */
      left: calc(50% - 50px - 8px);

      /* Subtract padding and 1/2 of height */
      top: calc(50% - 20px - 8px);
    }`,
    hidden: `
    &.mini .parent {
      height: var(--max-height);
    }
    &.mini .centerChild {
      width: 50px;
      height: 20px;
      left: calc(50% - 25px - 8px);
      top: calc(50% - 10px - 8px);
    }
    `,
    about:
      "Center a div of fixed height and width in the middle of another, ignoring other content in the parent. Useful for putting modals in their place.",
  },
  center_flex: {
    name: "Flex Center a Box",
    html: (
      <div className="flexParent">
        <div className="ignore">Centered!</div>
      </div>
    ),
    css: `.flexParent {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `,
    hidden: ``,
    about:
      "Center a div in the middle of another div with a flexbox. This will not ignore sibling elements.",
  },
  empty: {
    name: "404 No Snippet",
    html: (
      <div className="error">You've somehow gotten here without a snippet!</div>
    ),
    css: `.error {
      color: red;
    }`,
    hidden: ``,
    about:
      "This snippet is shown when you've tried to visit a non-existent snippet.",
  },
};

export default snippets;
