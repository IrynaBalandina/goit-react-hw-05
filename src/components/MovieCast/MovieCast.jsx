import { useParams} from "react-router-dom";
import { getCast } from "../../api/api";
import { useEffect, useState } from "react";
import style from './MovieCast.module.css';

const defaultImg = 
"https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";


const MovieCast = () => {
const {movieId} = useParams();
const [casts, setCasts] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] =  useState(false);

useEffect(()=>{
    if(!movieId)
        return;
    const fetchCasts = async()=>{
       
        try{
           setIsLoading(true);
           setError(false);
           const data = await getCast(movieId);
            setCasts(data.cast);
            console.log(data.cast);
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
if(isLoading)
    return <p>Loading casts</p>;


  return (
    <div>
        <ul className = {style.castList}>
            
        {casts.map((cast)=>(
                <li key = {cast.id} className = {style.castCard}>
                    <img 
                    className = {style.photo}
                    src={cast.profile_path ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : defaultImg}
                    alt="actor"
                    width={150}
                     />
                    <div className = {style.infoCasts}>
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