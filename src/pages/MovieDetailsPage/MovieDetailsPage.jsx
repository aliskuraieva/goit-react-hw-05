import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import clsx from "clsx";
import { requestMovieById } from "../../api/movies";

import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await requestMovieById(movieId);
        setMovieInfo(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movieInfo && !loading) {
    return <div>No movie found</div>;
  }

  const createIsActive = ({ isActive }) => {
    return clsx(styles.addInfoLink, isActive && styles.active);
  };

  return (
    <>
      <Link to={goBackLink.current} className={styles.goBackButton}>
        Go Back
      </Link>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {movieInfo && (
        <div className={styles.movieContainer}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title}
            className={styles.moviePoster}
          />
          <div className={styles.movieDetails}>
            <h2>
              {movieInfo.title} ({movieInfo.release_date.substring(0, 4)})
            </h2>
            <p className={styles.userScore}>
              <b>Rating: </b> {Math.round(movieInfo.vote_average * 10) / 10} /
              10
            </p>
            <p className={styles.genres}>
              <b>Genres: </b>
              {movieInfo.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className={styles.overview}>{movieInfo.overview}</p>
          </div>
        </div>
      )}
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="cast" className={createIsActive}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={createIsActive}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
