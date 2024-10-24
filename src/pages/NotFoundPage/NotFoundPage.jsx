import { Link } from "react-router-dom";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Page Not Found</p>
      <Link className={styles.link} to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
