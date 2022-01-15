import React from "react";

import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

import {
  TilesContainer,
  EachTile,
  FavIcon,
  InfoContainer,
  InfoShowingDiv,
  TitleDate,
  InfoHidingDiv,
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
              onClick={() => {
                toFav(image);
              }}
            />
          ) : (
            <FavIcon
              icon={farHeart}
              onClick={() => {
                toFav(image);
              }}
            />
          )}
          <InfoContainer>
            <InfoShowingDiv>
              <TitleDate>{image.title}</TitleDate>
              <TitleDate>{image.date}</TitleDate>
            </InfoShowingDiv>
            <InfoHidingDiv>
              <Description>{image.explanation}</Description>
            </InfoHidingDiv>
          </InfoContainer>
          <TileImage
            src={image.url}
            alt={image.title}
            onClick={() => console.log(image)}
          />
        </EachTile>
      ))}
    </TilesContainer>
  );
}

export default Tiles;
