import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext";

const FavoritesList = () => {
    const { favorites, removeFromFavorites } = useContext(FavoritesContext);

    return (
        <div>
            <h2>Meus filmes favoritos</h2>
            <ul>
                {favorites.map((favorite, index) => (
                    <li key={index}>{favorite}
                    <button onClick={() => removeFromFavorites(index)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavoritesList