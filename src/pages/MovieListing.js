import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { IMDB_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import MovieCard from "../components/movieCard";

const IMDBURL = `https://imdb-api.com/en/API/Title/${IMDB_APP_API_KEY}/tt1375666/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`;

function Movies() {
  const [movieData, setMovieData] = useState({});
  const [title, setTitle] = useState("tt1375666");
  const [searchParams] = useSearchParams();

  //10 fav movies
  //The Shawshank Redemption, Forrest Gump, The Lion King, Joker, Coco, Good Will Hunting, 3 Idiots, Room, Spotlight, The Help

  console.log("searchParams", searchParams.get("title"));

  useEffect(() => {
    const titleToQuery = searchParams.get("title") || title;
    setTitle(titleToQuery);
    axios
      .get(
        `https://imdb-api.com/en/API/Title/${IMDB_APP_API_KEY}/${titleToQuery}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
      )
      .then(function (mresponse) {
        setMovieData(mresponse.data);
      })
      .catch(function (error) {
        console.warn(error);
        setMovieData({});
      });
  }, []);

  console.log("Title", movieData);

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
    // title,
    // trailer,
    writers,
    year,
  } = useMemo(() => {
    const movieMain = movieData || {};
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
      // title: movieMain.title,
      // trailer: movieMain.trailer,
      writers: movieMain.writers,
      year: movieMain.year,
    };
  }, [movieData]);

  return (
    <div>
      <Header />
      <h1>All Movies</h1>
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
        // title={title}
        // trailer={trailer}
        writers={writers}
        year={year}
      />
      {/* <MovieCard movie={title} /> */}
    </div>
  );
}
export default Movies;
