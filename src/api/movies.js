import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzM0MGE4MDQ3OGFjNzJjZWNlYzg1NmIzY2RmZTNlZiIsIm5iZiI6MTcyOTY5NDQwMy4yNDI2NTUsInN1YiI6IjY3MThlZGVmMjdiZDU3ZDkxZjYyMmMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z9ge50cRguCVuIIyaUhOzF3wiQXvSxD1LpYS7gnyp1U",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// export const getProducts = async (params) => {
//   const { data } = await productsInstance.get("/", {
//     params,
//   });
//   return data;
// };

// export const searchProducts = async (q) => {
//   const { data } = await productsInstance.get("/search", {
//     params: {
//       q,
//     },
//   });
//   return data;
// };

// export const getProductById = async (id) => {
//   const { data } = await productsInstance.get(`/${id}`);
//   return data;
// };
