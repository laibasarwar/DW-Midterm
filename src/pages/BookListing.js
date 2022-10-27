import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { BOOKS_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import BookListingCard from "../components/bookListingCard";

function Books() {
  const [bookData, setBookData] = useState([]);

  // 10 fav books
  // Like a Bird, All My Rage, The Book Thief, Love Letters to the Dead, All the Bright Places, The Kite Runner, A Thousand Splendid Suns, And the Mountains Echoed, Home Fire, A Place for Us
  // id=79kczgEACAAJ , id=aEQxEAAAQBAJ, id=rk2MDQAAQBAJ , id=jr5CAgAAQBAJ , id=OqPoDAAAQBAJ , id=GrVPEAAAQBAJ , id=3vo0NQbIN2YC , id=NZJHAQAAQBAJ , id=qntnDwAAQBAJ , id=5w49DwAAQBAJ

  // const BOOKSURL = `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`;

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

  // console.log("BOOK2", bookData);

  // const { image1, btitle } = useMemo(() => {
  //   const bookMain = bookData.items || {};
  //   const bookVolumes1 = bookMain[0] || {};
  //   const book1 = bookVolumes1.volumeInfo || {};
  //   console.log("Book1", book1);
  //   // console.log("Book1", btitle);
  //   const bookImage1 = book1.imageLinks || {};
  //   return {
  //     image1: bookImage1.thumbnail,
  //     btitle: book1.title,
  //   };
  // }, [bookData]);

  return (
    <div>
      <Header />
      <h1>Books</h1>
      {bookData.map((book, i) => (
        <BookListingCard book={book} key={i} />
      ))}

      {/* <h3>{btitle}</h3>
      <img src={image1}></img> */}

      {/* <BookCard
        author={author}
        category={category}
        description={description}
        image={image}
        preview={preview}
        publisher={publisher}
        date={date}
        btitle={title}
      /> */}
    </div>
  );

  // console.log("BOOK URL", BOOKSURL);
  // const [bookData, setBookData] = useState({});
  // const [title, setTitle] = useState();
  // const [searchParams] = useSearchParams();

  // 10 fav books
  // Like a Bird, All My Rage, The Book Thief, Love Letters to the Dead, All the Bright Places, The Kite Runner, A Thousand Splendid Suns, And the Mountains Echoed, Home Fire, A Place for Us
  // id=79kczgEACAAJ , id=aEQxEAAAQBAJ, id=rk2MDQAAQBAJ , id=jr5CAgAAQBAJ , id=OqPoDAAAQBAJ , id=GrVPEAAAQBAJ , id=3vo0NQbIN2YC , id=NZJHAQAAQBAJ , id=qntnDwAAQBAJ , id=5w49DwAAQBAJ

  // console.log("searchParams", bookData);

  // useEffect(() => {
  //   const titleToQuery = searchParams.get("title") || title;
  //   setTitle(titleToQuery);
  //   axios
  //     .get(
  //       `https://books.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`
  //     )
  //     .then(function (bresponse) {
  //       setBookData(bresponse.data);
  //     })
  //     .catch(function (error) {
  //       console.warn(error);
  //       setBookData({});
  //     });
  // }, []);

  // console.log("Title", bookData);

  // const { image, btitle } = useMemo(() => {
  //   const bookMain = bookData.volumeInfo || {};
  //   const bookImage = bookMain.imageLinks || {};
  //   return {
  //     image: bookImage.thumbnail,
  //     btitle: bookMain.title,
  //   };
  // }, [bookData]);

  return (
    <div>
      <Header />
      <h1>Book Library</h1>
      {/* <h2>{btitle}</h2>
      <img src={image}></img> */}
    </div>
  );
}
export default Books;
