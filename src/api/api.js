import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const ACESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGM2YTVlMzA2ODZjZmNkYTFiMjIwMjI5ZTBlZDg0YSIsIm5iZiI6MTcyOTQ0OTA1NS4zMTk2NzEsInN1YiI6IjY3MTM5YTJhMmJiYmE2NWY3YjEwYzQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9ItDYpCMKolQcPTw0F9R_DEDWX7mqwc19W-2fknNgW0'
const options = {
  headers: {
    Authorization: `Bearer ${ACESS_TOKEN}`,
  },
};

export const getTrendingMovies = async()=>{
const {data}  = await axios.get("/trending/movie/day", options);
return data.results;
};

export const getMovieById = async(movieId)=>{
    const{data} = await axios.get(`/movie/${movieId}`, options);
    return data;
    };
    

export const getCast = async(movieId)=>{
const{data} =await axios.get(`movie/${movieId}/credits`, options);
return data.results;
};

export const getReviews = async(movieId)=>{
const{data} =await axios.get(`movie/${movieId}/reviews`, options);
return data.results;
};

export const getSearchMovie = async(query)=>{
const{data} = await axios.get(`/search/movie?query=${query}`, options);
return data.results;
};

