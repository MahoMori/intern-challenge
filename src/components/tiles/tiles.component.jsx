import React from "react";

function Tiles({ images }) {
  const toFav = (isFav) => {
    isFav ? (isFav = false) : (isFav = true);
  };

  return (
    <div>
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.date}>
            <img
              src={image.url}
              alt={image.title}
              onClick={() => toFav(image.isFav)}
            />
          </div>
        ))}
    </div>
  );
}

export default Tiles;
