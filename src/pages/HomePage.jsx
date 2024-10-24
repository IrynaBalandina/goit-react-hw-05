import { useEffect, useState } from "react";
import {getTrendingMovies} from '../api/api.js';
import MovieList from "../components/MovieList/MovieList.jsx";
import Loader from "../components/Loader/Loader.jsx";

const HomePage = () => {

    const[movies, setTrendMovies]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] =  useState(false);

    useEffect(() => {
      const fetchMovies = async () => {
      try{
        setError(false)
        const data = await getTrendingMovies();
        setTrendMovies(data);
      }catch{
       setError(true);
      }finally{
        setIsLoading(false);
      }
      
      };
      fetchMovies();
    }, []);

  return (
    <div>
    <h2>Trending today</h2>
    {error && <p>Oops, something went wrong! Please try again!</p>}
    {isLoading && <Loader/>}
    <MovieList movies={movies}/> 
          </div>
  )
}

export default HomePage;