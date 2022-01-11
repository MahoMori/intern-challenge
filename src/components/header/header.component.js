import React from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import { HeaderStyle, StyledLink } from "./header.style";

const Header = ({ handleFavSortClick }) => {
  const location = useLocation();
  return (
    <HeaderStyle>
      <h1>
        <StyledLink to="/">Space Gallery</StyledLink>
      </h1>
      <nav>
        {location.pathname === "/" ? (
          <h3 onClick={handleFavSortClick}>
            <StyledLink to="/favourites">
              <FontAwesomeIcon icon={fasHeart} style={{ color: "#FF84FF" }} />
              &nbsp; My Favourites
            </StyledLink>
          </h3>
        ) : (
          <h3 onClick={handleFavSortClick}>
            <StyledLink to="/">
              <FontAwesomeIcon icon={farHeart} style={{ color: "#000" }} />
              &nbsp; Back to List
            </StyledLink>
          </h3>
        )}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
