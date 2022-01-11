import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyle = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
  font-family: "Unica One", cursive;
  display: flex;
  justify-content: space-between;
  // justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 80px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
