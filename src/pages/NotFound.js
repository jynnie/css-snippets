import React from "react";
import styled from "styled-components";
import classnames from "classnames";

import Container from "../modules/Container";

const NotFound = styled(({ className }) => {
  return (
    <Container className={classnames(className)}>
      <h1>404 Not Found</h1>
      <div>There's nothing here!</div>
    </Container>
  );
})``;

export default NotFound;
