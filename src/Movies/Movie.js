import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function Movie(props) {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const isSaved = props.list.some((savedMovie) => savedMovie.id === movie.id);

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} expanded />

      {isSaved ? (
        <div
          className="save-button"
          onClick={() => props.removeFromSavedList(movie.id)}
        >
          Remove from saved
        </div>
      ) : (
        <div
          className="save-button"
          onClick={() => props.addToSavedList(movie.id)}
        >
          Save
        </div>
      )}
    </div>
  );
}
