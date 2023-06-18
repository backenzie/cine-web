import { Cabecalho } from "components/Cabecalho";
import { Rodape } from "components/Rodape";
import { Container } from "components/Container";
import { FavoritosProvider } from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

export const PageBase = () => {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
};
