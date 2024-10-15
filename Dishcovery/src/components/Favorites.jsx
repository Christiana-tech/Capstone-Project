import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard"; 

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1 className="text-white text-center  font-extrabold text-3xl pt-12 ">Your Favorite Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-green-600">
        {favorites && favorites.length > 0 ? ( 
                 favorites.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} isFavorite={true} />
          ))
        ) : (
          <p className="text-center">No favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
