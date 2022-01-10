import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import { HeaderStyle, HeaderLogoLink, MyFav } from "./header.style";

// click === trueであればMy favouriteをback to listに
const Header = ({ favSortClicked, handleFavSortClick }) => {
  return (
    <HeaderStyle>
      <h1>
        <HeaderLogoLink href="/">Space Gallery</HeaderLogoLink>
      </h1>
      <nav>
        {!favSortClicked ? (
          <MyFav onClick={handleFavSortClick}>
            <FontAwesomeIcon icon={fasHeart} style={{ color: "#FF84FF" }} />
            &nbsp; My Favourite
          </MyFav>
        ) : (
          <MyFav onClick={handleFavSortClick}>
            <FontAwesomeIcon icon={farHeart} style={{ color: "#000" }} />
            &nbsp; Back to List
          </MyFav>
        )}
      </nav>
    </HeaderStyle>
  );
};

export default Header;
