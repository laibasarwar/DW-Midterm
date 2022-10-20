import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
// import { WEATHER_APP_API_KEY } from "../API_KEYS";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import MovieCard from "../components/movieCard";
// import WeatherCard from "../components/weatherCard";

// const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=${WEATHER_APP_API_KEY}`;
const openIMDBURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/`;

function Home() {
  const [movieData, setMovieData] = useState({});
  const [movie, setMovie] = useState("Inception");
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("title"));

  useEffect(() => {
    const movieToQuery = searchParams.get("title") || movie;
    setMovie(movieToQuery);

    axios
      .get(
        // `https://imdb-api.com/en/API/Title/${IMDB_APP_API_KEY}/tt1375666`
        `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/${movieToQuery}`
        // `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
      )
      .then(function (response) {
        console.log(response);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  console.log("Expression", movieData);

  // const { title, stars, year } = useMemo(() => {
  //   const movieTitle = movieData.id || {};
  //   const movieStars = movieData.stars || {};
  //   return {
  //     title: { title },
  //     stars: { stars },
  //     year: { year },
  //   };
  // }, [movieData]);

  return (
    <div>
      <Header />
      <h1>Movie List</h1>
    </div>
  );
}
export default Home;
