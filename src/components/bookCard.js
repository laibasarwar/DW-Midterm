import React from "react";

function BookCard({
  author,
  category,
  description,
  image,
  preview,
  publisher,
  date,
  btitle,
}) {
  return (
    <div className="BookCard">
      <div className="Image">
        <a href={preview}>
          <img src={image}></img>
        </a>
      </div>
      <div className="Content">
        <h3>{btitle}</h3>
        <p> by {author} </p>
        <p> Category: {category} </p>
        <p> Publisher: {publisher}</p>
        <p> Published: {date}</p>
        <p> Blurb: {description}</p>
      </div>
    </div>
  );
}

export default BookCard;
