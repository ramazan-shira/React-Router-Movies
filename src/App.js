import React, { useState, useEffect } from "react";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import { Route, Routes } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5001/api/movies")
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    if (!saved.includes(id)) {
      const savedMovie = movies.find((movie) => movie.id === id);

      setSaved([...saved, savedMovie]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />

      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/movies/:id"
          element={
            <Movie
              movies={movies}
              addToSavedList={addToSavedList}
              list={saved}
            />
          }
        />
      </Routes>
    </div>
  );
}
