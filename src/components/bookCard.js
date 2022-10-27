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
    <div className="MovieCard">
      <h3>{btitle}</h3>
      <p> Author: {author} </p>
      <p> Category: {category} </p>
      <p> Description: {description}</p>
      <img src={image}></img>
      <p> Preview:{preview}</p>
      <p> Publisher:{publisher}</p>
      <p> Date: {date}</p>
    </div>
  );
}

export default BookCard;
