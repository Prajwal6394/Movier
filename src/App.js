import { useEffect, useState } from "react";
import Movie from "./Components/Movie";

const Main_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f4987f91047d6556cbdf8801520ff1&page1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const serach_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=14f4987f91047d6556cbdf8801520ff1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");

  useEffect(() => {
    fetch(Main_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (e) => {
   e.preventDefault();
    if (search) {
      fetch(serach_API + search)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });

      setSearch("");
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
