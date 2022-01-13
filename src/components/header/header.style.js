import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../assets/screenSize";

export const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
  font-family: "Unica One", cursive;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 80px;
  margin: 0 auto;

  & > h1 {
    margin: 10px 0;
  }

  & > nav {
    text-align: right;
  }

  @media ${device.mobileL} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
