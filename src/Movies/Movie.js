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

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} expanded />

      {props.list.find((movie) => movie.id) ? (
        <div className="unsave">Remove from saved</div>
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
