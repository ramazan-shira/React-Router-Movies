import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const navigate = useNavigate();

  const handleMovie = (id) => {
    navigate(`/movies/${id}`);
  };

  return <MovieCard movie={props.movie} handleMovie={handleMovie} />;
}
