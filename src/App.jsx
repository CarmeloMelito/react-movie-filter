import { useState, useEffect } from "react";
//FILM
import filmList from "../film";

function App() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(filmList);
  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(filmList);
    } else {
      const filtered = filmList.filter(
        (movie) => movie.genre === selectedGenre
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre]);

  const genres = [...new Set(filmList.map((movie) => movie.genre))];
  return (
    <>
      <h1> Film</h1>

      <label>Trova genere: </label>
      <select
        value={selectedGenre}
        onChange={(event) => setSelectedGenre(event.target.value)}
      >
        <option value="">Tutti i generi</option>
        {genres.map((genre, index) => (
          <option value={genre} key={index}>
            {genre}
          </option>
        ))}
      </select>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.genre})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
