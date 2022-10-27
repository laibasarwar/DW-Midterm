import React from "react";

function MovieListingCard({ movie }) {
  return (
    <div className="MovieListingCard">
      <a href="/movie">
        <img src={movie.image}></img>
      </a>
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieListingCard;
