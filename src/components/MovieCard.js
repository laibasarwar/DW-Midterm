import React from "react";
// import MovieImage from "./MovieImage";

function MovieCard({
  awards,
  companies,
  contentRating,
  directors,
  fullTitle,
  genres,
  id,
  imDbRating,
  image,
  languages,
  plot,
  releaseDate,
  stars,
  title,
  trailer,
  writers,
  year,
}) {
  return (
    <div className="MovieCard">
      <h2>{title}</h2>
      <p> Awards: {awards} </p>
      <p> Companies: {companies} </p>
      <p> Content Rating: {contentRating}</p>
      <p> Director: {directors}</p>
      <p> Full Title: {fullTitle}</p>
      <p> Genres: {genres}</p>
      <p> ID: {id}</p>
      <p> imDb Rating: {imDbRating}</p>
      <p> Image:{image}</p>
      <p> Languages:{languages}</p>
      <p> Plot:{plot}</p>
      <p> Release Date: {releaseDate}</p>
      <p> Stars: {stars}</p>
      <p> Title: {title}</p>
      <p> Trailer: {trailer}</p>
      <p> Writer: {writers}</p>
      <p> Year: {year}</p>
    </div>
  );
}

export default MovieCard;
