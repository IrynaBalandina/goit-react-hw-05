import { useParams} from "react-router-dom";
import { getCast } from "../../api/api";
import { useEffect, useState } from "react";

const defaultImg =  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";


const MovieCast = () => {
const {movieId} = useParams();
const [casts, setCasts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] =  useState(false);

useEffect(()=>{
    const fetchCasts = async()=>{
        try{
            setError(false);
            const data = await getCast(movieId);
            setCasts(data);
        }catch{
       setError(true);
    }finally{
        setIsLoading(false);
     }
    };
    fetchCasts()
},[movieId]);

if(error)
    return <p>Opps, something is wrong!Please, try again!</p>;
if(!isLoading)
    return <p>Loading casts</p>;


  return (
    <div>
        <ul>
            {casts.map((cast)=>(
                <li key = {cast.casts_id}>
                    <img 
                    src={
                        cast.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                          : defaultImg
                      } 
                    alt="actor" />
                    <div>
                        <p>{cast.name}</p>
                        <p>Character:{cast.character}</p>
                    </div>
                </li>
            )
            )}
        </ul>
    </div>
  )
}

export default MovieCast;