import { FavoritesProvider } from "./components/FavoritesContext"
import AddToFavorites from "./components/AddToFavorites"
import FavoritesList from "./components/FavoritesList"
import MovieOptions from "./components/MoviesOptions"


function App() {

  return (
    <>
      <FavoritesProvider>
        <div>
          <h1>Escolha seus filmes favoritos!</h1>
          <AddToFavorites />
          <MovieOptions />
          <FavoritesList />
        </div>
        <img src="./cinema.png" width={100}></img>
      </FavoritesProvider>
    </>
  )
}

export default App
