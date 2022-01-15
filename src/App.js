import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import { SolarSystemLoading } from "react-loadingg";

import Header from "./components/header/header.component";
import Tiles from "./components/tiles/tiles.component";
import Favourites from "./components/favourites/favourites.component";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`;

function App() {
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
    const storageImages = JSON.parse(localStorage.getItem("favourites"));
    if (storageImages !== null) {
      setFavImages(storageImages);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchStorageImages();
  }, []);

  // like/dislike and add to local storage
  const [favImages, setFavImages] = useState([]);

  const toFav = (image) => {
    image.isFav ? (image.isFav = false) : (image.isFav = true);

    const storageImages = JSON.parse(localStorage.getItem("favourites"));

    if (storageImages === null) {
      // when there is no local data
      localStorage.setItem(
        "favourites",
        JSON.stringify(images.filter((image) => image.isFav === true))
      );
      setFavImages(JSON.parse(localStorage.getItem("favourites")));
    } else {
      // when there is local data
      // check if it exists in local data
      const doesExist = storageImages.find(
        (storageImage) => storageImage.date === image.date
      );

      if (doesExist === undefined) {
        // if it doesn't exist in local data, like it
        storageImages.push(image);
        localStorage.setItem("favourites", JSON.stringify(storageImages));
        setFavImages(JSON.parse(localStorage.getItem("favourites")));
      } else {
        // if it exists and confirm is true, unlike it
        if (window.confirm("Are you sure you want to unlike this?")) {
          const unlikedStorageImages = storageImages.filter(
            (storageImage) => storageImage.date !== image.date
          );
          localStorage.setItem(
            "favourites",
            JSON.stringify(unlikedStorageImages)
          );
          setFavImages(JSON.parse(localStorage.getItem("favourites")));
        }
      }
    }
  };

  return (
    <>
      <Header />
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
