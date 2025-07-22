import styles from "./Sidebar.module.css";
import { AppNav } from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export const Sidebar = ({ children }) => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      {children}
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
};
