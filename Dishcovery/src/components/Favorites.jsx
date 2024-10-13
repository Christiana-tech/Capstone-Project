import React from "react";
const Favorites = ({ favorites, toggleFavorite }) => (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          ))
        ) : (
          <p className="text-green-600">No favorite recipes yet!</p>
        )}
      </div>
    </div>
  );
  
  export default Favorites;
  