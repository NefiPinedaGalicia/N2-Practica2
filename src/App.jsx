import React, { useState, useEffect } from "react";
import Filters from "./components/filters";
import Searcher from "./components/searcher";
import Cards from "./components/cards";

const App = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState("Nature");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const query = searchQuery || filter;
      const url = `https://api.pexels.com/v1/search?query=${query}&per_page=20`;
      const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: apiKey,
          },
        });
        const data = await response.json();
        setImages(data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [filter, searchQuery]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-['Lobster_Two'] text-4xl font-bold text-center text-gray-800 py-8">
          Snap Shot
        </h1>
        <Searcher setSearchQuery={setSearchQuery} />
        <Filters setFilter={setFilter} />
        <Cards images={images} filter={filter} />
      </div>
    </div>
  );
};

export default App;
