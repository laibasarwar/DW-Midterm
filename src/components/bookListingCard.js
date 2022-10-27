import React from "react";

function BookListingCard({ book }) {
  return (
    <div className="MovieCard">
      <h2>{book.volumeInfo.title}</h2>
      <img src={book.volumeInfo.imageLinks.thumbnail}></img>
    </div>
  );
}

export default BookListingCard;
