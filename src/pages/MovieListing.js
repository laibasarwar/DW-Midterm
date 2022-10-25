import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import MovieCard from "../components/movieCard";

const IMDBURL = `https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`;

function Movies() {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`)
      .then(function (mresponse) {
        setMovieData(mresponse.data);
      })
      .catch(function (error) {
        setMovieData({});
      });
  }, []);

  console.log("Title", movieData.items);

  //10 fav movies
  //The Shawshank Redemption, Forrest Gump, The Lion King, Joker, Coco, Good Will Hunting, 3 Idiots, Room, Spotlight, The Help

  return (
    <div>
      <Header />
      <h1>All Movies</h1>
    </div>
  );
}
export default Movies;
