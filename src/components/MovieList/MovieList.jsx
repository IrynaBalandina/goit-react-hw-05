 import{ Link, useLocation } from  'react-router-dom';
 import style from './MovieList.module.css'


const MovieList = ({movies}) => {
   const location = useLocation();
const defaultImg =  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  return (

    <div>
       <ul className={style.listMovies}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
              <img
              
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                width={250}
                alt={movie.title}
              />
              <p > {movie.title}</p>
            
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MovieList;