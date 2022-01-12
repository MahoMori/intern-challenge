import React from "react";

import { NoFavContainer, NoFav } from "./favourites.style";

import Tiles from "../tiles/tiles.component";

const Favourites = ({ favImages, toFav }) => {
  return (
    <>
      {favImages.length > 0 ? (
        <Tiles images={favImages} toFav={toFav} />
      ) : (
        <NoFavContainer>
          <NoFav>There's no favourite image!</NoFav>
        </NoFavContainer>
      )}
    </>
  );
};

export default Favourites;
