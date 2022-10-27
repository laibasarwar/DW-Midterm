import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { BOOKS_APP_API_KEY } from "../API_KEYS";
import Header from "../components/Header";
import BookCard from "../components/bookCard";

// const BOOKSURL = `https://books.googleapis.com/books/v1/volumes/79kczgEACAAJ?key=${BOOKS_APP_API_KEY}`;

function Book() {
  const [bookData, setBookData] = useState({});
  const [title, setTitle] = useState("79kczgEACAAJ");
  const [searchParams] = useSearchParams();

  //   //10 fav books
  //   //Like a Bird, All My Rage, The Book Thief, Love Letters to the Dead, All the Bright Places, The Kite Runner, A Thousand Splendid Suns, And the Mountains Echoed, Home Fire, A Place for Us

  console.log("searchParams", searchParams.get("title"));

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

  console.log("Title", bookData);

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

// import axios from "axios";
// import React, { useEffect, useState, useMemo } from "react";
// import { BOOKS_APP_API_KEY } from "../API_KEYS";
// import BookCard from "../components/bookCard";

// const BOOKSURL = `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`;

// function Books() {
//   const [bookData, setBookData] = useState({});

//   useEffect(() => {
//     axios
//       .get(
//         `https://www.googleapis.com/books/v1/users/115218350790390753405/bookshelves/0/volumes?key=${BOOKS_APP_API_KEY}`
//       )
//       .then(function (bresponse) {
//         setBookData(bresponse.data);
//       })
//       .catch(function (error) {
//         setBookData({});
//       });
//   }, []);

//   console.log("Book", bookData.items);

//   //10 fav books
//   //Like a Bird, All My Rage, The Book Thief, Love Letters to the Dead, All the Bright Places, The Kite Runner, A Thousand Splendid Suns, And the Mountains Echoed, Home Fire, A Place for Us

//   return (
//     <div>
//       <h1>All Books</h1>
//     </div>
//   );
// }
// export default Books;
