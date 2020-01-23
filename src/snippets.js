import React from "react";

/**
 * @typedef Snippet
 * @property {string} name
 * @property {DOM} html
 * @property {string} css
 * @property {string} hidden styles
 * @property {string} about
 * @property {string[]?} related reference to other snippets
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
        <div className="skewOnHover">hover over me</div>
        <div className="skewOnHoverNoTransition">hover over me</div>
        <div className="newColorWhenClicking">click on me</div>
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
    related: ["tooltip"],
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
    related: ["center_abs", "tooltip"],
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
    related: ["pos_abs"],
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
  hamburger: {
    name: "Hamburger Menu",
    html: (
      <div className="navbar">
        <img
          className="hamburger"
          alt="hamburger menu"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FHamburger_icon.svg%2F1200px-Hamburger_icon.svg.png&f=1&nofb=1"
        />
      </div>
    ),
    css: `
    .menu {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
    }

    /* applied to tag with both classes */
    .show.menu {
      display: block;
    }
    `,
    hidden: `
    .menu {
      width: calc(100% - 18px);
      background-color: var(--white);
    }

    .close {
      margin-bottom: var(--s);
    }

    .ignore + .ignore {
      margin-top: var(--s);
    }

    .hamburger {
      width: 40px;
    }
    `,
    about:
      "Create a hamburger menu that shows up when the screen is smaller than a certain size. An easy way to make your menus responsive.",
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
  fixed_header: {
    name: "Sticky Header Follows when Scrolling",
    html: (
      <div className="parent">
        <div className="header">i'll follow you as you scroll!</div>
      </div>
    ),
    css: `.header {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      left: 0;
    }`,
    hidden: `
    .parent {
      height: 200vh;
    }

    &.mini .parent {
      height: var(--max-height);
    }
    `,
    about:
      "Positioning a header or just box such that it follows you as you scroll.",
  },
  tooltip: {
    name: "Custom Tooltip",
    html: (
      <div className="content">
        something that might need clarifying
        <div className="tooltip">tooltip</div>
      </div>
    ),
    css: `.content {
      position: relative;
    }

    /* tooltip must be a child of tag */
    .content .tooltip {
      display: none;
      position: absolute;
      top: 38px;
      right: 50%;
    }

    .content:hover .tooltip {
      display: block;
    }
    `,
    hidden: ``,
    about:
      "Customize a message that shows up when you hover over other content. To use the default tooltip, simply add the alt property to a tag, i.e: <div alt='tooltip'>content</div>.",
    related: ["pos_abs", "hover_transition"],
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
