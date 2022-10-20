import React from "react";

function MovieCard({ title, stars }) {
  return (
    <div className="MovieCard">
      <h2>{title}</h2>
      <h2>{stars}</h2>
    </div>
  );
}

export default MovieCard;
