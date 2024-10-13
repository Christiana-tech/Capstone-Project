import React, { useState, useEffect } from "react";
import Searchbar from './SearchBar';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetail';
import { fetchRecipes } from '../utils/api';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const initialQuery = "";
  const limit = 20;

  // Search Handler
  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setNoResults(false);
    setRecipes([]);

    try {
      const results = await fetchRecipes(query || initialQuery, limit);

      if (!results || !Array.isArray(results)) {
        throw new Error("Invalid response from the API");
      }

      setRecipes(results);
      setNoResults(results.length === 0);
    } catch (err) {
      setError(err.message === "Failed to fetch" 
        ? "Network issue. Please check your internet connection." 
        : "Failed to load recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Initial Search
  useEffect(() => {
    handleSearch(initialQuery);
  }, []);

  // Load Favorites from Local Storage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("Loaded from localStorage:", storedFavorites);
    setFavorites(storedFavorites);
  }, []);

  // Save Favorites to Local Storage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle Favorite Function
  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.some((fav) => fav.idMeal === recipe.idMeal)
        ? prevFavorites.filter((fav) => fav.idMeal !== recipe.idMeal)
        : [...prevFavorites, recipe];
    });
  };

  return (
    <div className="p-4">
      <Searchbar onSearch={handleSearch} />

      {loading && <p className="text-center text-white">Loading recipes...</p>}
      {error && <p className="text-center text-white">{error}</p>}
      {noResults && <p className="text-center text-white">No recipes found. Please try a different search.</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard 
            key={recipe.idMeal} 
            recipe={recipe} 
            onSelect={() => setSelectedRecipe(recipe)}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
          />
        ))}
      </div>

      {selectedRecipe && (
        <div className="mt-6">
          <RecipeDetails recipe={selectedRecipe} />
        </div>
      )}
    </div>
  );
};

export default Recipes;
