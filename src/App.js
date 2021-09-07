import logo from "./logo.svg";
import { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./component/MovieList";
import "./App.css";
import HeaderApp from "./component/HeaderApp";
import { AddMovie } from "./component/AddMovie";

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState(moviesData);
  const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);
  const handelAdd = (newMovie) => setMovies([...movies, newMovie]);

  return (
    <div className="App">
      <HeaderApp
        rating={rating}
        text={text}
        handleText={handleText}
        handleRating={handleRating}
      ></HeaderApp>{" "}
      <AddMovie add={handelAdd} />
      <MovieList
        movies={movies.filter((el) =>
          el.name
            .toLowerCase()
            .includes(text.toLowerCase() && el.rating == rating)
        )}
      />
    </div>
  );
}

export default App;
