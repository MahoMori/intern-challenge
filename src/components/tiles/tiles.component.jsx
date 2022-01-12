import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import {
  TilesContainer,
  EachTile,
  InfoContainer,
  TitleDate,
  Description,
  TileImage,
} from "./tiles.style.js";

function Tiles({ images, toFav }) {
  return (
    <TilesContainer>
      {images.length > 0 &&
        images.map((image) => (
          <EachTile key={image.date}>
            <FontAwesomeIcon icon={fasHeart} style={{ color: "#FF84FF" }} />
            <InfoContainer>
              <TitleDate></TitleDate>
              <Description></Description>
            </InfoContainer>
            <TileImage
              src={image.url}
              alt={image.title}
              onClick={() => {
                toFav(image);
              }}
            />
          </EachTile>
        ))}
    </TilesContainer>
  );
}

export default Tiles;
