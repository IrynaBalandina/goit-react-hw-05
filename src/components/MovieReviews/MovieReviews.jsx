import { useParams } from "react-router-dom";
import {getReviews} from '../../api/api';
import { useEffect, useState } from "react";

const MovieReviews = () => {
   const {movieId} = useParams();
const [reviews, setReviews] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] =  useState(false);

useEffect(()=>{
  if(!movieId)
    return;
  const fetchReviews  = async()=>{
    try{
      setIsLoading(true);
      setError(false);
      const data  = await getReviews(movieId);
      setReviews(data);
      console.log(data);
    }catch{
      setError(true);
    }finally{
      setIsLoading(false);
    }
  }
  fetchReviews();
}, [movieId]);


if(error)
  return <p>Opps, something is wrong!Please, try again!</p>;
 if(!isLoading)
   return <p>Loading reviews</p>;


  return (
    <div>
      <ul>
        {reviews.map((review)=>(
          <li key= {review.id}>
            <div>
              <h3>{" "}<span>Author:</span>
              {review.author}
              </h3>
              <p>{review.content}</p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieReviews;