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
  flex_grid: {
    name: "Flex(ible) Grid of Cards",
    html: (
      <div className="flexParent">
        <div className="ignore card">0) random</div>
        <div className="ignore card">1) cards</div>
        <div className="ignore card">2) that</div>
        <div className="ignore card">3) wrap</div>
        <div className="ignore card">4) in</div>
        <div className="ignore card">5) parent</div>
      </div>
    ),
    css: `.flexParent {
      display: flex;
      flex-wrap: wrap;
    }
    `,
    hidden: `&.mini .parent {
      height: var(--max-height);
      grid-template-columns: 30px 1fr;
    }

    .card {
      width: calc(40% - 24px);
      overflow: hidden;
      white-space:nowrap;
      margin-right: 8px;
      margin-bottom: 8px;
    }
  `,
    about:
      "Flexible container for cards that wraps when it cannot fit another card on the same line. Useful for not just cards.",
  },
  hover_transition: {
    name: "Hover Transitions & More",
    html: (
      <div>
        <div class="skewOnHover">hover over me</div>
        <div class="skewOnHoverNoTransition">hover over me</div>
        <div class="newColorWhenClicking">click on me</div>
      </div>
    ),
    css: `.skewOnHover {
      transition: transform 1s;
    }

    .skewOnHover:hover {
      transform: skew(30deg);
    }

    .skewOnHoverNoTransition:hover {
      transform: skew(30deg);
    }

    .newColorWhenClicking {
      transition: background 1s;
    }

    .newColorWhenClicking:active {
      background-color: #fe82de;
    }
    `,
    hidden: `
      div {
        position: relative;
      }

      .skewOnHover, .skewOnHoverNoTransition {
        margin-bottom: var(--s);
      }
    `,
    about:
      "Examples of how to use :hover and :active psuedo-selectors to have dynamic styles. Demonstrates transitions for smoothing. Make your buttons and links feel more alive!",
  },
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
  overflow_hidden: {
    name: "Hide Overflowing Content",
    html: (
      <>
        <div className="parentHides">
          <div className="long ignore">
            extremely looooooooong content clipped by the parent element
          </div>
        </div>
        <div>
          <div className="long ignore">
            the parent of this element doesn't care and let's her run amok,
            making life hard
          </div>
        </div>
      </>
    ),
    css: `.parentHides {
      overflow: hidden;
      width: 443px;
    }

    .long {
      width: 140%
    }
    `,
    hidden: `
    .parentHides {
      margin-bottom: var(--m);
    }
    .long {
      position: relative
    }
    `,
    about:
      "Hide content that goes out of bounds of the parent container. This works for containers with a bounded or defined width.",
  },
  grid_sidebar: {
    name: "Sidebar with Grid",
    html: (
      <div className="parent">
        <div className="ignore">sidebar</div>
        <div className="ignore">main content</div>
      </div>
    ),
    css: `.parent {
      display: grid;
      grid-template-columns: 100px 1fr;
      grid-gap: 8px;
      height: 400px;
    }`,
    hidden: `&.mini .parent {
      height: var(--max-height);
      grid-template-columns: 30px 1fr;
    }
    `,
    about:
      "Have a sidebar of specific width sit next to main content. Can hide the sidebar if the first parameter of grid-template-columns is set to 0.",
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
