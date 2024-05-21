import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import axios from "axios";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=YYfT46HjtTb7FYrYCVeo_X-b5wPWO9fckoMc85xYKGg"
        );
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }
    fetchPhotos();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=YYfT46HjtTb7FYrYCVeo_X-b5wPWO9fckoMc85xYKGg`
      );
      setPhotos(response.data.results);
    } catch (error) {
      console.error("Error searching photos:", error);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
