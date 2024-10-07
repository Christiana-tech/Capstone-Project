//import React from 'react'
import { Link } from 'react-router-dom'

import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="border rounded-lg p-3 w-full  my-35 hover:shadow-lg cursor-pointer transition duration-200 bg-gray-100">
        <img
          src={recipe.strMealThumb || "/placeholder.jpg"}
          alt={recipe.strMeal || "Recipe image"}
          className="w-full h-48 object-cover rounded  transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        <h2 className="text-lg font-semibold mt-2">{recipe.strMeal || "Unknown Recipe"}</h2>
        <p className="text-sm">Category: {recipe.strCategory || "N/A"}</p>
        <p className="text-sm">Cuisine: {recipe.strArea || "N/A"}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;