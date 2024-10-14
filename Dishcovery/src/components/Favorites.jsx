import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
         const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));  
      } else {
        setFavorites([]); 
      }
    }
  }, []); 


  if (favorites === null) {
    return <div>Loading your favorites...</div>;
  }

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {favorites.length > 0 ? ( 
          favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} />
          ))
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
