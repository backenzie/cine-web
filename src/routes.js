import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Favoritos } from "pages/Favoritos";
import { Player } from "pages/Player";
import { NotFound } from "pages/NotFound";
import { PageBase } from "pages/PageBase";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
