import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMDB_APP_API_KEY } from "../API_KEYS";

const MOVIE_DATA_API = `https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`;

function Movie() {
  const { movie } = useParams();
  const [movieImageData, setMovieImageData] = useState({});
  const [movieInfoData, setMovieInfoData] = useState({});

  useEffect(() => {});
  return (
    <div>
      <h1>All Movies</h1>
    </div>
  );
}

export default Movie;
