 import{ Link, useLocation } from  'react-router-dom';
 import style from './MovieList.module.css'


const MovieList = ({movies}) => {
   const location = useLocation();


  return (

    <div>
       <ul className={style.listMovies}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li key={movie.id} className={style.movieItem} >
              <Link to={`/movies/${movie.id}`} state={location}>

            
              <p > {movie.title}</p>
            
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default MovieList;