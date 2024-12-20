import styles from "./MoviesSearchForm.module.css";

const MoviesSearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.search.value.trim();
    if (value === "") {
      return;
    }
    onSearch(value);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.field}
        type="text"
        name="search"
        placeholder="Movie search..."
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default MoviesSearchForm;
