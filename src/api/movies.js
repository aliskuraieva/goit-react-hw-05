import axios from "axios";

const options = {
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM0MGE4MDQ3OGFjNzJjZWNlYzg1NmIzY2RmZTNlZiIsIm5iZiI6MTcyOTY5NDQwMy4yNDI2NTUsInN1YiI6IjY3MThlZGVmMjdiZDU3ZDkxZjYyMmMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9ge50cRguCVuIIyaUhOzF3wiQXvSxD1LpYS7gnyp1U",
  },
};

export const requestMovies = () => {
  return axios.get("/trending/movie/day", options);
};

export const requestMovieById = (movieId) => {
  return axios.get(`/movie/${movieId}`, options);
};

export const requestMovieCast = (movieId) => {
  return axios.get(`/movie/${movieId}/credits`, options);
};

export const requestMovieReviews = (movieId) => {
  return axios.get(`/movie/${movieId}/reviews`, options);
};

export const requestMoviesByQuery = (query) => {
  return axios.get(`search/movie?query=${query}`, options);
};
