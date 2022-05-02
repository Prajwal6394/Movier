import { useEffect, useState } from "react";
import Movie from "./Components/Movie";

const Main_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14f4987f91047d6556cbdf8801520ff1&page1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(Main_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <>
      <header>
        <input className="search"type="search" placeholder="Search"/>
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
