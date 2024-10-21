import { useEffect, useState } from "react";
import {getTrendingMovies} from '../api/api.js';
import MovieList from "../components/MovieList/MovieList.jsx";

const HomePage = () => {

    const[movies, setTrendMovies]= useState([]);

  
    useEffect(() => {
      const fetchMovies = async () => {
      
      
          const data = await getTrendingMovies();
          setTrendMovies(data);
      console.log(data);
      };
      fetchMovies();
    }, []);

  return (
    <div>
    
    <MovieList movies={movies}/> 
          </div>
  )
}

export default HomePage;