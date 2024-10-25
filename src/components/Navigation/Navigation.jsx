import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.addInfoLink, isActive && styles.active);
};

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
