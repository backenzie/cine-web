import styles from "./Cabecalholink.module.css";
import { Link } from "react-router-dom";

export const CabecalhoLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
};
