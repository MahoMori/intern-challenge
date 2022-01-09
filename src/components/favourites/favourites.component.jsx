import React from "react";

const Favourites = ({ favImages }) => {
  return (
    <div>
      {favImages.length > 0 ? (
        favImages.map((image) => (
          <div key={image.date}>
            <img
              src={image.url}
              alt={image.title}
              // onClick={() => {
              //   toFav(image);
              // }}
            />
          </div>
        ))
      ) : (
        <h3>There's no favourite images!</h3>
      )}
    </div>
  );
};

export default Favourites;
