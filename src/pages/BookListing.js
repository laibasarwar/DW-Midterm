import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { BOOKS_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import BookListingCard from "../components/bookListingCard";

function Books() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`
      )
      .then(function (response) {
        console.log(response);
        setBookData(response.data.items);
      })
      .catch(function (error) {
        console.warn(error);
        setBookData({});
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Favorite Books So Far</h1>
      <div className="bookWrapper">
        {bookData.map((book, i) => (
          <BookListingCard book={book} key={i} />
        ))}
      </div>
    </div>
  );
}
export default Books;
