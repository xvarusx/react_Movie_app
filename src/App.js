import logo from "./logo.svg";
import { useState } from "react";
import { moviesData } from "./data";
import MovieList from "./component/MovieList";
import "./App.css";
import HeaderApp from "./component/HeaderApp";
import { AddMovie } from "./component/AddMovie";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Desc } from "./component/Desc";

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState(moviesData);
  const handleText = (e) => setText(e.target.value);
  const handleRating = (x) => setRating(x);
  const handelAdd = (newMovie) => setMovies([...movies, newMovie]);

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderApp
          rating={rating}
          text={text}
          handleText={handleText}
          handleRating={handleRating}
        ></HeaderApp>{" "}
        <AddMovie add={handelAdd} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                movies={movies.filter(
                  (el) =>
                    el.name.toLowerCase().includes(text.toLowerCase()) &&
                    el.rating >= rating
                )}
              />
            )}
          ></Route>
          <Route
            path="/movie/:id"
            render={(props) => <Desc movies={movies} {...props} />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
