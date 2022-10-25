import React from "react";

function Header() {
  return (
    <div>
      <header>
        <div class="header">
          <a href="/" class="title">
            {" "}
            My Favs Bookshelf
          </a>
          <div class="header-content">
            <a href="/">Movies</a>
            <a href="/booklist">Books</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
