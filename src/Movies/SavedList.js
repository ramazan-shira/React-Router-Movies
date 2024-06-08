import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SavedList(props) {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie" key={movie.id}>
            {movie.title}
          </span>
        </Link>
      ))}
      <div className="home-button" onClick={handleHome}>
        Home
      </div>
    </div>
  );
}
