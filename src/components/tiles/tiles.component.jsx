import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`;

function Tiles() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const { data } = await axios.get(url);
    data.map((d) => {
      d.isFav = false;
      return d;
    });
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const toFav = (image) => {
    image.isFav ? (image.isFav = false) : (image.isFav = true);
  };

  return (
    <div>
      {images.length > 0 &&
        images.map((image) => (
          <div key={image.date}>
            <img
              src={image.url}
              alt={image.title}
              onClick={() => toFav(image)}
            />
          </div>
        ))}
    </div>
  );
}

export default Tiles;
