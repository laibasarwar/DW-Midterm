import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import MovieCard from "../components/movieCard";

function Movie() {
  const [movieData, setMovieData] = useState({});
  const [movie, setMovie] = useState("tt1375666");
  const [searchParams] = useSearchParams();

  console.log("searchParams", searchParams.get("movie"));

  useEffect(() => {
    const movieToQuery = searchParams.get("movie") || movie;
    setMovie(movieToQuery);
    axios
      .get(
        `https://imdb-api.com/en/API/Title/${IMDB_APP_API_KEY}/${movieToQuery}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
      )
      .then(function (mresponse) {
        setMovieData(mresponse.data);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  const {
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
  } = useMemo(() => {
    const movieMain = movieData || {};
    const movieImage = movieData.trailer || {};
    return {
      awards: movieMain.awards,
      companies: movieMain.companies,
      contentRating: movieMain.contentRating,
      directors: movieMain.directors,
      fullTitle: movieMain.fullTitle,
      genres: movieMain.genres,
      id: movieMain.id,
      imDbRating: movieMain.imDbRating,
      image: movieMain.image,
      languages: movieMain.languages,
      plot: movieMain.plot,
      releaseDate: movieMain.releaseDate,
      stars: movieMain.stars,
      title: movieMain.title,
      trailer: movieImage.linkEmbed,
      writers: movieMain.writers,
      year: movieMain.year,
    };
  }, [movieData]);

  return (
    <div>
      <Header />
      <h1>Individual Movie</h1>
      <MovieCard
        awards={awards}
        companies={companies}
        contentRating={contentRating}
        directors={directors}
        fullTitle={fullTitle}
        genres={genres}
        id={id}
        imDbRating={imDbRating}
        image={image}
        languages={languages}
        plot={plot}
        releaseDate={releaseDate}
        stars={stars}
        title={title}
        trailer={trailer}
        writers={writers}
        year={year}
      />
    </div>
  );
}
export default Movie;
