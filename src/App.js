import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header/header.component";
import Tiles from "./components/tiles/tiles.component";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`;

// clicked

function App() {
  const [favSortClicked, setFavSortClicked] = useState(false);
  const handleFavSortClick = () => {
    favSortClicked ? setFavSortClicked(false) : setFavSortClicked(true);
  };

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

  return (
    <>
      <Header setFavSortClicked={handleFavSortClick} />
      <main>
        {!favSortClicked ? (
          <Tiles images={images} />
        ) : (
          <h3>this is fav sort page</h3>
        )}
      </main>
    </>
  );
}

export default App;
