import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import MovieCard from "../components/MovieCard";
function Movies() {
  const URL = `https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`;

  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/${IMDB_APP_API_KEY}`)
      .then(function (response) {
        console.log(response);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  console.log("Expression", movieData.items);
  console.log("Title", movieData.items);

  // const { title } = useMemo(() => {
  //   const movieTitle = movieData.items[0] || {};
  //   return {
  //     title: { title },
  //   };
  // }, [movieData]);

  return (
    <div>
      <h1>All Movies</h1>
      {/* <p>movieData.items[0]</p> */}
      {/* {movieData.items.map((movie, i) => ( */}
      {/* <MovieCard />
      ))} */}
      {/* {movieData.map((movie, i) => (
        <MovieCard movie={movie} key={i} />
      ))} */}
    </div>
  );
}

export default Movies;

// const { movieFavData, setMovieFavData } = useState([]);
// //Make Query for All Movies
// // const URL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/${expression}`;

// useEffect(() => {
//   axios
//     .get(URL)
//     .then((response) => {
//       console.log(response);
//       setMovieFavData("response", response.data);
//     })
//     .catch((error) => {
//       console.log("error", error);
//       setMovieFavData([]);
//     });
// }, []);

// console.log("movieFavData", movieFavData);

// import React, { useEffect, useState, useMemo } from "react";
// import axios from "axios";
// import { useSearchParams } from "react-router-dom";
// // import { WEATHER_APP_API_KEY } from "../API_KEYS";
// import { IMDB_APP_API_KEY } from "../API_KEYS";
// import Header from "../components/Header";
// import MovieCard from "../components/movieCard";
// // import WeatherCard from "../components/weatherCard";

// // const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=${WEATHER_APP_API_KEY}`;
// const openIMDBURL = `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/`;

// function Home() {
//   const [movieData, setMovieData] = useState({});
//   const [movie, setMovie] = useState("Inception");
//   const [searchParams] = useSearchParams();

//   console.log("searchParams", searchParams.get("title"));

//   useEffect(() => {
//     const movieToQuery = searchParams.get("title") || movie;
//     setMovie(movieToQuery);

//     axios
//       .get(
//         `https://imdb-api.com/en/API/SearchMovie/${IMDB_APP_API_KEY}/${movieToQuery}`
//       )
//       .then(function (response) {
//         console.log(response);
//         setMovieData(response.data);
//       })
//       .catch(function (error) {
//         console.warn(error);
//         setMovieData({});
//       });
//   }, []);

//   console.log("Expression", movieData);

//   // const { title, stars, year } = useMemo(() => {
//   //   const movieTitle = movieData.id || {};
//   //   const movieStars = movieData.stars || {};
//   //   return {
//   //     title: { title },
//   //     stars: { stars },
//   //     year: { year },
//   //   };
//   // }, [movieData]);

//   return (
//     <div>
//       <Header />
//       <h1>Movie List</h1>
//     </div>
//   );
// }
// export default Home;
