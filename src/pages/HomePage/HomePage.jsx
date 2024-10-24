import { useEffect, useState } from "react";
import { requestMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await requestMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending today</h1>
      {loading && <div>Loading...</div>}
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
