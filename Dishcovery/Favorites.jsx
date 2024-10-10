import React from 'react';
import RecipeCard from './RecipeCard';

const Favorites = ({ favorites, toggleFavorite }) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Your Favorites</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.length > 0 ? (
        favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            toggleFavorite={toggleFavorite}
            isFavorite
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No favorites added yet.</p>
      )}
    </div>
  </div>
);

export default Favorites;
