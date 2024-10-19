import axios from 'axios';



axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET',
  headers: {
	
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGM2YTVlMzA2ODZjZmNkYTFiMjIwMjI5ZTBlZDg0YSIsIm5iZiI6MTcyOTMzODkyNC4wMzEzNTQsInN1YiI6IjY3MTM5YTJhMmJiYmE2NWY3YjEwYzQwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jb63NuN4h1Uqwm9D92D7hbIqZSDr_6NZrC-jWhZHVTY'
  }
};

/*fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))

  fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));*/

export const fetchMovies = async()=>{
const {data} =await axios.get('trending/movie/day?language=en-US', options);
return data.results;
};

export const fetchMovieById = async(movieId)=>{
    const{data} =await axios.get(`movie/${movieId}`, options);
    return data;
    };
    

export const fetchCast = async(movieId)=>{
const{data} =await axios.get(`movie/${movieId}/credits`, options);
return data.results;
};

export const fetchReviews = async(movieId)=>{
const{data} =await axios.get(`movie/${movieId}/reviews`, options);
return data.results;
};

export const fetchSearchMovie = async(query)=>{
const{data} = await axios.get((`search/movie?query=${query}&page=1`, options));
return data.results;
};