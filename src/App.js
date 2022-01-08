import React, { useState, useEffect } from "react";
import axios from "axios";

const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&count=20`;

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const { data } = await axios.get(url);
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <ul>
        {images.length > 0 &&
          images.map((image) => (
            <li key={image.date}>
              <img src={image.url} alt={image.title} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
