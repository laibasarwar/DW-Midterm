import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { BOOKS_APP_API_KEY } from "../API_KEYS";
import BookCard from "../components/bookCard";

const BOOKSURL = `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`;

function Books() {
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`
      )
      .then(function (bresponse) {
        setBookData(bresponse.data);
      })
      .catch(function (error) {
        setBookData({});
      });
  }, []);

  console.log("Book", bookData.items);

  //10 fav books
  //Like a Bird, All My Rage, The Book Thief, Love Letters to the Dead, All the Bright Places, The Kite Runner, A Thousand Splendid Suns, And the Mountains Echoed, Home Fire, A Place for Us

  return (
    <div>
      <h1>All Books</h1>
    </div>
  );
}
export default Books;
