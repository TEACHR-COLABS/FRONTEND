
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

//Styling
import { RowContainer } from "../globals/components";

//Styled Components
const HeaderStyling = styled.p`
  background: #ffffff;
  padding: 20px;
  margin-bottom: 5vh;
  color: white;
  width: 20%;
  text-align: left;
`
const Image = styled.img`

	width: 75px;
	height: 75px;
	padding-left: 10px;
	padding-top: 10px;
`

const Header = ({assessmentGrade}) => (
    <RowContainer align="center">
      <HeaderStyling><Image src={process.env.PUBLIC_URL + "/logoteachr.png"} /></HeaderStyling>
    </RowContainer>
);

export default withRouter(Header);
