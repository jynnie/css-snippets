import React, { useState } from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

import CodeBlock from "../../modules/CodeBlock";
import Container from "../../modules/Container";
import Related from "../../modules/Related";

import snippets from "../../snippets";

const moreCSS = `.hamburger {
      display: none;
    }

    /* only show when screen size < 640px */
    @media screen and (max-width: 640px) {
      .hamburger {
        display: block;
      }
    }
`;

const ReactCodeBlock = () => {
  return (
    <SyntaxHighlighter
      className="u-marginNone"
      language="react"
      style={nord}
      showLineNumbers
      wrapLines
    >
      {`class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  setShowMenu = (new) => {
    this.setState({ showMenu: new });
  }

  render() {
    return (
      <div className="navbar">
        <img
          className="hamburger"
          alt="hamburger menu"
          src="IMAGE SOURCE HERE"
          onClick={() => setShowMenu(true)}
        />
        <div className={\`menu \${showMenu && "show"}\`}>
          <div className="close" onClick={() => setShowMenu(false)}>
            close menu
          </div>
          <div className="ignore">link one</div>
          <div className="ignore">link two</div>
        </div>
      </div>
    )
  }
}`}
    </SyntaxHighlighter>
  );
};

const HamburgerPreview = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box className="Preview">
      <div className="navbar">
        <img
          className="hamburger"
          alt="hamburger menu"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FHamburger_icon.svg%2F1200px-Hamburger_icon.svg.png&f=1&nofb=1"
          onClick={() => setShowMenu(true)}
        />
        <div className={`menu ${showMenu && "show"}`}>
          <div className="close" onClick={() => setShowMenu(false)}>
            close menu
          </div>
          <div className="ignore">link one</div>
          <div className="ignore">link two</div>
        </div>
      </div>
    </Box>
  );
};

const HamburgerSnippet = styled(({ className }) => {
  let snip = snippets["hamburger"];

  return (
    <Container className={classnames(className)}>
      <h1>{snip.name}</h1>
      <p>{snip.about}</p>
      <Box className="grid">
        <HamburgerPreview />
        <Box>
          <h2 style={{ marginTop: 0 }}>React</h2>
          <ReactCodeBlock />

          <h2>CSS</h2>
          <CodeBlock code={moreCSS + snip.css} />
        </Box>
      </Box>
      {snip.related && (
        <>
          <h2>Related Snippets</h2>
          <Related related={snip.related} />
        </>
      )}
    </Container>
  );
})`
  ${snippets["hamburger"].css}
  ${snippets["hamburger"].hidden}

  h2 {
    margin-bottom: 0;
  }

  .Preview {
    position: relative;
  }

  .Preview div {
    padding: var(--s);
    border: 1px solid var(--dark-grey);
  }

  .Preview .ignore {
    background: var(--silver);
    border-color: var(--silver-focus);
  }

  .grid {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-gap: var(--m);
  }

  @media screen and (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default HamburgerSnippet;
