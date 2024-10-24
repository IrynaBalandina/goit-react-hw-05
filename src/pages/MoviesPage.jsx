import SearchForm from "../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import MovieList from '../components/MovieList/MovieList';
import {getSearchMovie}  from '../api/api.js';
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) {
      return;
    }

  const getMovies = async () => {
    
       try {
        setError(false);
        const data = await getSearchMovie(query);
        setMovies(data);
      } catch {
        setError(true);
      }
    };
    getMovies();
  }, [searchParams]);

  const handleSubmit = value => {
   
    setSearchParams({ query: value });
  }
    if (error) return <p>Something went wrong! Please try again later.</p>;
  return (
    <div>
        <SearchForm onSubmit={handleSubmit} />
        <MovieList movies={movies} />
    </div>
  )
}

export default MoviesPage;