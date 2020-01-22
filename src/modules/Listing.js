import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const Listing = styled(({ className }) => {
  return <div className={classnames(className)}></div>;
})``;

export default Listing;
