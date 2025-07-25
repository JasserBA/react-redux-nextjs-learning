import React from "react";
import styles from "./Button.module.css";
export const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]} `}>
      {children}
    </button>
  );
};
