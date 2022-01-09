import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { HeaderStyle, HeaderLogoLink, MyFav } from "./header.style";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>
        <HeaderLogoLink href="/">Space Gallery</HeaderLogoLink>
      </h1>
      <nav>
        <MyFav>
          <FontAwesomeIcon icon={faHeart} style={{ color: "#ff32ff" }} />
          &nbsp; My Favourite
        </MyFav>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
