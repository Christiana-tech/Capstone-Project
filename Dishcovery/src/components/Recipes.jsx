//import React, { useEffect, useState } from 'react'
//import { BiSearchAlt2 } from 'react-icons/bi'
//import Loading from './Loading'
import Searchbar from './SearchBar'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../utils/api'
 import { useState } from "react";
import RecipeDetails from './RecipeDetail';
 const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className="p-4">
      <Searchbar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {recipes && recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={setSelectedRecipe} />
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