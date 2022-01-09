import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header/header.component";
import Tiles from "./components/tiles/tiles.component";
import Favourites from "./components/favourites/favourites.component";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`;

function App() {
  // Favourite in nav bar clicked or not
  const [favSortClicked, setFavSortClicked] = useState(false);
  const handleFavSortClick = () => {
    favSortClicked ? setFavSortClicked(false) : setFavSortClicked(true);
  };

  // fetch images
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

  // filter favourite images
  const [favImages, setFavImages] = useState([]);

  const filterFavs = () => {
    const copyImages = images.filter((image) => image.isFav === true);
    setFavImages(copyImages);
  };

  // useEffect(() => {
  //   const copyImages = images;
  //   copyImages.filter((image) => image.isFav === true);
  //   setFavImages(copyImages);
  //   console.log("favimages", favImages);
  // }, [images]);

  const toFav = (image) => {
    image.isFav ? (image.isFav = false) : (image.isFav = true);
    filterFavs();
  };

  return (
    <>
      <Header favSortClicked={favSortClicked}handleFavSortClick={handleFavSortClick} />
      <main>
        {!favSortClicked ? (
          <Tiles images={images} toFav={toFav} />
        ) : (
          <Favourites favImages={favImages} toFav={toFav} />
        )}
      </main>
    </>
  );
}

export default App;
