import { useParams, useLocation } from 'react-router-dom';
import getMovieById from '../api/api';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
  
  return (
    <div>

    </div>
  )
}

export default MovieDetailsPage;