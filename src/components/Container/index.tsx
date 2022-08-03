import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  width: 95%;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Container: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
