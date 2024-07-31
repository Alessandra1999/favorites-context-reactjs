import { useContext, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

const AddToFavorites = () => {
   const { addToFavorites } = useContext(FavoritesContext);
   const [item, setItem] = useState('');

   const handleAdd = ()  => {
    if (item) {
        addToFavorites(item);
        setItem('');
    }
   }

   return (
    <div>
        <input 
                type="text" 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
                placeholder="Adicionar item aos favoritos" 
            />
            <button onClick={handleAdd}>Adicionar</button>
    </div>
   )
}

export default AddToFavorites