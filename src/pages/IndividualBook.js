import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
// import { useParams } from "react-router";
import { BOOKS_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import BookCard from "../components/bookCard";

function Book() {
  const [bookData, setBookData] = useState({});
  const [title, setTitle] = useState("79kczgEACAAJ");
  const [searchParams] = useSearchParams();

  //   const { id } = useParams();

  //   const bookData1 = bookData.find((book) => book.id === id);

  useEffect(() => {
    const titleToQuery = searchParams.get("title") || title;
    setTitle(titleToQuery);
    axios
      .get(
        `https://books.googleapis.com/books/v1/volumes/${titleToQuery}?key=${BOOKS_APP_API_KEY}`
      )
      .then(function (bresponse) {
        setBookData(bresponse.data);
      })
      .catch(function (error) {
        console.warn(error);
        setBookData({});
      });
  }, []);

  const {
    author,
    category,
    description,
    image,
    preview,
    publisher,
    date,
    btitle,
  } = useMemo(() => {
    const bookMain = bookData.volumeInfo || {};
    const bookAuthor = bookMain.authors || {};
    const bookCat = bookMain.categories || {};
    const bookImage = bookMain.imageLinks || {};
    return {
      btitle: bookMain.title,
      author: bookAuthor[0],
      category: bookCat[0],
      description: bookMain.description,
      image: bookImage.thumbnail,
      preview: bookMain.previewLink,
      publisher: bookMain.publisher,
      date: bookMain.publishedDate,
    };
  }, [bookData]);

  return (
    <div>
      <Header />
      <h1>Individual Books</h1>
      <BookCard
        btitle={btitle}
        author={author}
        category={category}
        description={description}
        image={image}
        preview={preview}
        publisher={publisher}
        date={date}
      />
    </div>
  );
}
export default Book;
