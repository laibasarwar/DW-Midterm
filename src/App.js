import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./pages/MovieListing.js";
import Movie from "./pages/IndividualMovie.js";
import MovieCard from "./components/MovieCard.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "movie/:id",
    element: <Movie />,
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
