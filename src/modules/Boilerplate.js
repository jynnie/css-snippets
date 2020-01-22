import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Box from "ui-box";

const COMPONENT = styled(({ className }) => {
  return <Box className={classnames(className)}></Box>;
})``;

export default COMPONENT;
