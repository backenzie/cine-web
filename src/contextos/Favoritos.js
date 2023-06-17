import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export const FavoritosProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export function useFavoritContext() {
  const { favorite, setFavorite } = useContext(FavoritosContext);

  function addFavorite(newFavorite) {
    const favoriteReptide = favorite.some((item) => item.id === newFavorite.id);

    let newList = [...favorite];

    if (!favoriteReptide) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList.splice(
      newList.findIndex(
        (item) =>
          item.id === newList.find((item) => item.id === newFavorite.id).id
      ),
      1
    );
    return setFavorite(newList);
  }
  return {
    favorite,
    addFavorite,
  };
}
