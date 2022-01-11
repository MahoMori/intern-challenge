import React from "react";

import { FavContainer, NoFav } from "./favourites.style";

const Favourites = ({ toFav, favImages }) => {
  return (
    <FavContainer>
      {favImages.length > 0 ? (
        favImages.map((image) => (
          <div key={image.date}>
            <img
              src={image.url}
              alt={image.title}
              onClick={() => {
                toFav(image);
              }}
            />
          </div>
        ))
      ) : (
        <NoFav>There's no favourite image!</NoFav>
      )}
    </FavContainer>
  );
};

export default Favourites;
