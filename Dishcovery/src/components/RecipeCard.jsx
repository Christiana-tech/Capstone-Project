//import React from 'react'
///import { Link } from 'react-router-dom'

import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div
      className="border rounded-lg p-4 hover:shadow-lg cursor-pointer"
      onClick={() => onSelect(recipe)}
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded" />
      <h2 className="text-lg font-semibold mt-2">{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Cuisine: {recipe.strArea}</p>
    </div>
  );
};

export default RecipeCard;
