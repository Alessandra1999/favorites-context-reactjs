import { useContext, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

const MovieOptions = () => {
    const { addToFavorites } = useContext(FavoritesContext);

    const movies = [
        'Pulp Fiction',
        'O Senhor dos Anéis',
        'Harry Potter',
        'O Poderoso Chefão',
        'O Castelo Animado',
        'Tá Dando Onda',
        'Forrest Gump',
        'O Serviço de Entregas da Kiki',
        'Entrevista com o Vampiro',
        'A Fuga das Galinhas',
        'Por Água Abaixo',
        'A Viagem de Chihiro',
        'Nimona'
       ];

       return (
        <div>
            <h2>Opções de Filmes</h2>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie} <button onClick={() => addToFavorites(movie)}>Adicionar aos Favoritos</button>
                    </li>
                ))}
            </ul>
        </div>
       )
}

export default MovieOptions;