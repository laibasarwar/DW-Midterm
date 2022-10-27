import React from "react";

function MovieCard({
  awards,
  contentRating,
  directors,
  genres,
  imDbRating,
  image,
  plot,
  releaseDate,
  stars,
  title,
  trailer,
  writers,
}) {
  return (
    <div
      className="MovieCard"
      style={{ backgroundColor: `rgba(0,100,${imDbRating * 10})` }}
    >
      <div className="Image">
        <img src={image}></img>
      </div>
      <div className="Content">
        <h2>{title}</h2>
        <p> Genres: {genres}</p>
        <p>
          {" "}
          Content Rating: {contentRating} | imDb Rating: {imDbRating}
        </p>
        <p>
          {" "}
          Director: {directors} | Writer: {writers}
        </p>
        <p> Actors: {stars}</p>
        <p> Release Date: {releaseDate}</p>
        <p> Plot: {plot}</p>
        <iframe
          src={trailer}
          width="900"
          height="400"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          frameborder="no"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

export default MovieCard;
