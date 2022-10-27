import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/.js";
import Movies from "./pages/MovieListing.js";
import Movie from "./pages/IndividualMovie.js";
import Books from "./pages/BookListing.js";
import Book from "./pages/IndividualBook.js";

const router = createBrowserRouter([
  {
    //Home
    path: "/",
    element: <Books />,
  },
  {
    //Movie Listing
    path: "/movielist",
    element: <Movies />,
  },
  {
    //Individual Movie
    path: "/movie",
    element: <Movie />,
  },
  {
    //Home - Book Listing
    path: "/booklist",
    element: <Books />,
  },
  {
    //Individual Book
    path: "/book",
    element: <Book />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
