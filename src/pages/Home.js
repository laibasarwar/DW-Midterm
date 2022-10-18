import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { OMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";

const openOMDBURL = `http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_APP_API_KEY}`;

function Home() {
  const [movieData, setMovieData] = useState({});
  const [movie, setMovie] = useState("Maleficent");
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("title"));

  useEffect(() => {
    const movieToQuery = searchParams.get("movie") || movie;
    setMovie(movieToQuery);

    axios
      .get(`http://www.omdbapi.com/?t=${movieToQuery}`)
      .then(function (response) {
        console.log(response);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  console.log("Title", movieData);

  return (
    <div>
      <div>
        <Header />
        <h1> Movie App</h1>
      </div>
    </div>
  );
}

export default Home;
