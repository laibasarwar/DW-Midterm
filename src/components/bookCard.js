import React from "react";

function BookCard({
  author,
  category,
  description,
  image,
  preview,
  publisher,
  date,
  title,
}) {
  return (
    <div className="MovieCard">
      <h2>{title}</h2>
      <p> Author: {author} </p>
      <p> Category: {category} </p>
      <p> Description: {description}</p>
      <p> Image:{image}</p>
      <img src={image}></img>
      <p> Preview:{preview}</p>
      <p> Publisher:{publisher}</p>
      <p> Date: {date}</p>
      <p> Title: {title}</p>
    </div>
  );
}

export default BookCard;
