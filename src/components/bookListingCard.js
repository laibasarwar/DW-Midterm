import React from "react";

function BookListingCard({ book }) {
  return (
    <div className="BookListingCard">
      <a href="/book">
        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
      </a>
      <h2>{book.volumeInfo.title}</h2>
    </div>
  );
}

export default BookListingCard;
