import logo from "./logo.svg";
import { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./component/MovieList";
import "./App.css";
import HeaderApp from "./component/HeaderApp";

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState(moviesData);
  const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);
  return (
    <div className="App">
      <HeaderApp
        rating={movies.rating}
        text={text}
        rating={rating}
        handleText={handleText}
        handleRating={handleRating}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
