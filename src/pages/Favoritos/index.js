import { Banner } from "components/Banner";
import styles from "./Favoritos.module.css";
import { Titulo } from "components/Titulo";
import { Cards } from "components/Cards";
import { useFavoritContext } from "contextos/Favoritos";

export const Favoritos = () => {
  const { favorite } = useFavoritContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Cards {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
};
