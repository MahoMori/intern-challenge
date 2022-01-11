import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { SolarSystemLoading } from "react-loadingg";

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

  // loading or not
  const [loading, setLoading] = useState(true);

  // fetch images
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    await axios.get(url).then((result) => {
      const { data } = result;
      data.map((d) => {
        d.isFav = false;
        return d;
      });
      setImages(data);
      setLoading(false);
    });
  };

  const fetchStorageImages = () => {
    setFavImages(JSON.parse(localStorage.getItem("favourites")));
  };

  useEffect(() => {
    fetchImages();
    fetchStorageImages();
  }, []);

  // like/dislike and add to local storage
  const [favImages, setFavImages] = useState([]);

  const toFav = (image) => {
    image.isFav ? (image.isFav = false) : (image.isFav = true);

    const copyImages = images.filter((image) => image.isFav === true);
    const storageImages = JSON.parse(localStorage.getItem("favourites"));
    if (storageImages === null) {
      localStorage.setItem("favourites", JSON.stringify(copyImages));
      setFavImages(JSON.parse(localStorage.getItem("favourites")));
    } else {
      storageImages.push(image);
      localStorage.setItem("favourites", JSON.stringify(storageImages));
      setFavImages(JSON.parse(localStorage.getItem("favourites")));
    }
  };

  return (
    <>
      <Header
        favSortClicked={favSortClicked}
        handleFavSortClick={handleFavSortClick}
      />
      {loading ? (
        // #ffae00
        <SolarSystemLoading color="#000080" size="large" />
      ) : (
        <main>
          <Routes>
            <Route path="/" element={<Tiles images={images} toFav={toFav} />} />
            <Route
              path="/favourites"
              element={<Favourites favImages={favImages} toFav={toFav} />}
            />
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
