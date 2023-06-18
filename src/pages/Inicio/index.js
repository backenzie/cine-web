import { Banner } from "components/Banner";
import { Titulo } from "components/Titulo";
import { Cards } from "components/Cards";
import styles from "./inicio.module.css";
import videos from "json/db.json";

export const Inicio = () => {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((filme) => {
          return <Cards {...filme} key={filme.id} />;
        })}
      </section>
    </>
  );
};
