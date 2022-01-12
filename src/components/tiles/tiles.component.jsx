import React from "react";

import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import {
  TilesContainer,
  EachTile,
  FavIcon,
  InfoContainer,
  TitleDate,
  Description,
  TileImage,
} from "./tiles.style";

function Tiles({ images, toFav }) {
  return (
    <TilesContainer>
      {images.map((image) => (
        <EachTile key={image.date}>
          {image.isFav ? (
            <FavIcon
              icon={fasHeart}
              size="xl"
              onClick={() => {
                toFav(image);
              }}
            />
          ) : (
            <FavIcon
              icon={farHeart}
              size="xl"
              onClick={() => {
                toFav(image);
              }}
            />
          )}
          <InfoContainer>
            <TitleDate>{image.title}</TitleDate>
            <TitleDate>{image.date}</TitleDate>
            <Description>{image.explanation}</Description>
          </InfoContainer>
          <TileImage src={image.url} alt={image.title} />
        </EachTile>
      ))}
    </TilesContainer>
  );
}

export default Tiles;
