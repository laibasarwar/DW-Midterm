import React from "react";

function MovieListingCard({ movie }) {
  return (
    <div className="MovieListingCard">
      <h2>{movie.title}</h2>
      <img src={movie.image}></img>
    </div>
  );
}

export default MovieListingCard;
