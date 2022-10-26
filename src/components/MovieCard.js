import React from "react";

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
      <img src={image}></img>
      <p> Languages:{languages}</p>
      <p> Plot:{plot}</p>
      <p> Release Date: {releaseDate}</p>
      <p> Stars: {stars}</p>
      <p> Title: {title}</p>
      <p> Trailer: {trailer}</p>
      <iframe
        src={trailer}
        width="960"
        height="540"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameborder="no"
        scrolling="no"
      ></iframe>
      <p> Writer: {writers}</p>
      <p> Year: {year}</p>
    </div>
  );
}

export default MovieCard;
