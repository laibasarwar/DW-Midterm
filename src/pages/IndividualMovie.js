import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMDB_APP_API_KEY } from "../API_KEYS";

// const MOVIE_DATA_API = `https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`;
// const MOVIE_DATA_API = `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/${movie}`;

function Movie() {
  const { movie } = useParams();
  //   const [movieImageData, setMovieImageData] = useState({});
  const [movieInfoData, setMovieInfoData] = useState({});

  useEffect(() => {});
  //First API
  axios
    .get(`https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/${movie}`)
    .then((response) => {
      console.log(response);
      movieInfoData(response.data);
    })
    .catch((error) => {
      console.warn(error);
      movieInfoData({});
    });
  return (
    <div>
      <h1>Individual Movie</h1>
    </div>
  );
}

export default Movie;
