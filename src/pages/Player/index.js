import { Titulo } from "components/Titulo";
import { Banner } from "components/Banner";
import { NotFound } from "pages/NotFound";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import videos from "json/db.json";

export const Player = () => {
  const parametros = useParams();

  const video = videos.find((vid) => vid.id === parseInt(parametros.id));

  if (!video) {
    return <NotFound />;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          className={styles.iframe}
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
};
