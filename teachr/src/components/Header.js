import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//Styling
import { RowContainer } from "../globals/components";

//Styled Components
const HeaderStyling = styled.p`
  background-color: black;
  padding: 20px;
  margin-bottom: 5vh;
  color: white;
  width: 100%;
  text-align: center;
`
const Header = () => (
    <RowContainer align="center">
      <HeaderStyling>Teachr:Header(logo and background) - To be worked on</HeaderStyling>
    </RowContainer>
);

export default withRouter(Header);
