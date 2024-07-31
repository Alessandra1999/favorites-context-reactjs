import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = (props) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
    };

    const removeFromFavorites = (indexToRemove) => {
        setFavorites(favorites.filter((_, index) => index !== indexToRemove));
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}