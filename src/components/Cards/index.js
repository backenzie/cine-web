import { useFavoritContext } from "contextos/Favoritos";
import styles from "./Cards.module.css";
import iconeFavoritar from "./favorite.png";
import iconeDesfavoritar from "./desfavorito.png";
import { Link } from "react-router-dom";

export const Cards = ({ id, titulo, capa }) => {
  const { favorite, addFavorite } = useFavoritContext();

  const isFavorite = favorite.some((fav) => fav.id === id);

  const icon = !isFavorite ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt="imagem do card" className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icon}
        alt="icone de coração"
        className={styles.favoritar}
        onClick={() => {
          addFavorite({ id, titulo, capa });
        }}
      />
    </div>
  );
};
