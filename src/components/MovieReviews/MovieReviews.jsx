import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReviews } from "../../api/movies";

import styles from "./MovieReviews.module.css";

function MovieReviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await requestMovieReviews(movieId);

        setMovieReviews(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, [movieId]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {movieReviews !== null && movieReviews.length > 0 && (
        <ul className={styles.list}>
          {movieReviews.map((review) => {
            return (
              <li key={review.id}>
                <p className={styles.author}>Author: {review.author}</p>
                <p className={styles.comment}>
                  <b>Comment:</b> {review.content}
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {movieReviews !== null && movieReviews.length === 0 && (
        <p>No reviews available for this movie.</p>
      )}
    </>
  );
}

export default MovieReviews;
