import { useParams, NavLink, Link, useLocation, Outlet} from 'react-router-dom';
import {getMovieById} from '../../api/api.js';
import { useEffect,  useState,Suspense, useRef } from 'react';
import Loader from '../../components/Loader/Loader';
import style from './MovieDetailsPage.module.css';
 import clsx from "clsx";

 const buildNavLinkClass = ({ isActive }) => {
return clsx(style.link, isActive && style.active);
 }


const MovieDetailsPage = () => {
    const { movieId } = useParams();

   const location = useLocation();
     const goBack =  useRef(location.state ?? "/");
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] =  useState(false);
    const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

useEffect(()=>{
  if(!movieId)
    return;
  const fetchMoviesByDetails =async ()=>{
    try{
      setError(false);
      const data = await getMovieById(movieId);
      setMovie(data);
    }catch{
      setError(true)
    }finally{
      setIsLoading(false)
    }
  }
  fetchMoviesByDetails()
},[movieId])

    if (isLoading) return <Loader />;
    if (error) return <p>Something went wrong! Please try again later.</p>;
    if (!movie) return <p>Loading movie details...</p>;


  return (
    <div className={style.wrapperDetails}>
      <div className={style.wrapperGoBack}>
        <Link className={style.linkGoBack} to={goBack.current}>
          Go back
        </Link>
      </div>

      <div className={style.detailsList}>
      <img
          className={style.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt={movie.title}
        />
        <div className={style.info}>
          <h1>{movie.title}</h1>
          <p>
            User Score:{" "}
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <div>
            <h3>Genres</h3>
            <p>
              {movie.genres
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </p>
          </div>
        </div>
      </div>

      <div className={style.navContainer}>
      
          <nav className={style.nav}> 
           <NavLink className={buildNavLinkClass} to="cast"> 
             Cast 
           </NavLink>
          <NavLink className={buildNavLinkClass} to="reviews"> 
             Reviews 
           </NavLink> 
         </nav>  

       
      </div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
);
};
  


export default MovieDetailsPage;