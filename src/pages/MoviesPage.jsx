import SearchForm from "../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import MovieList from '../components/MovieList/MovieList';
import {getSearchMovie}  from '../api/api.js';
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) {
      return;
    }

  const getMovies = async () => {
    
        const data = await getSearchMovie(query);
        setMovies(data);
    }
    getMovies();
  }, [searchParams]);

  const handleSubmit = (value) => {
    if (!value) {
      return setSearchParams({});
    }
    setSearchParams({ query: value });
  }
  
  return (
    <div>
        <SearchForm onSubmit={handleSubmit} />
        <MovieList movies={movies} />
    </div>
  )
}

export default MoviesPage;