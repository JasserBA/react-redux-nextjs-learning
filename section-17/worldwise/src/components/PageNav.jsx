import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
export const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Go Product</NavLink>
        </li>

        <li>
          <NavLink to="/pricing">Go pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Go login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
