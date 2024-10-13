//import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import React from "react";

const RecipeCard = ({ recipe, toggleFavorite, isFavorite }) => {
  return (
    <div className="border rounded-lg p-3 w-34 my-5 hover:shadow-lg cursor-pointer transition duration-200 bg-gray-100">
      {/* Wrap only the image and text in the Link */}
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb || "/placeholder.jpg"}
          alt={recipe.strMeal || "Recipe image"}
          className="w-full h-48 object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105"
          loading="lazy"
        />
        <h2 className="text-lg font-semibold mt-2 text-green-800">{recipe.strMeal || "Unknown Recipe"}</h2>
        <p className="text-sm">Category: {recipe.strCategory || "N/A"}</p>
        <p className="text-sm">Cuisine: {recipe.strArea || "N/A"}</p>
      </Link>
      {/* Favorite Button */}
      <button 
        onClick={(e) => {
          e.preventDefault(); // Prevents Link navigation
          e.stopPropagation(); // Prevents event bubbling
          toggleFavorite(recipe);
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="mt-2"
      >
        {isFavorite ? <AiFillHeart color="green" /> : <AiOutlineHeart />}
      </button>
    </div>
  );
};

export default RecipeCard;
