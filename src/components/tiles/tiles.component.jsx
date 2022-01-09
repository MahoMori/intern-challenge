import React from "react";

function Tiles({ images }) {
  const toFav = (image) => {
    console.log("before click", image);
    image.isFav ? (image.isFav = false) : (image.isFav = true);
    console.log("after click", image);
  };
  return (
    <div>
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.date}>
            <img
              src={image.url}
              alt={image.title}
              onClick={() => {
                toFav(image);
              }}
            />
          </div>
        ))}
    </div>
  );
}

export default Tiles;
