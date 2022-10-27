import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import MovieListingCard from "../components/movieListingCard";

function Movies() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`)

      .then(function (mresponse) {
        setMovieData(mresponse.data.items);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  console.log("all", movieData);

  const filteredArray = movieData.filter((item) => {
    if (
      item.id === "tt0111161" ||
      item.id === "tt0109830" ||
      item.id === "tt0110357" ||
      item.id === "tt7286456" ||
      item.id === "tt2380307" ||
      item.id === "tt0119217" ||
      item.id === "tt1187043" ||
      item.id === "tt3170832" ||
      item.id === "tt1895587" ||
      item.id === "tt1454029"
    )
      return item;
  });
  console.log("array", filteredArray);

  return (
    <div>
      <Header />
      <h1>Movies</h1>
      <div className="movieWrapper">
        {filteredArray.map((movie, i) => (
          <MovieListingCard movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
}
export default Movies;
