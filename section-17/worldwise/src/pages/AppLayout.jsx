import { Sidebar } from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import { Map } from "../components/Map";

export const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};
