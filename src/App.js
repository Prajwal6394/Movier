import { useEffect, useState } from "react";
import Movie from "./Components/Movie";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Main_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f4987f91047d6556cbdf8801520ff1&page1";
//const IMG_API = "https://image.tmdb.org/t/p/w1280";
const serach_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=14f4987f91047d6556cbdf8801520ff1&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(Main_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(serach_API + search);
      setSearch("");
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header>
        <Header />
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
      <Footer/>
    </>
  );
}

export default App;
