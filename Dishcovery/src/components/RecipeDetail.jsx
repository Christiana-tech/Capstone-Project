
import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <p>Select a recipe to see the details</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <iframe
        src={`https://www.youtube.com/embed/${recipe.strYoutube?.split("v=")[1]}`}
        title="Recipe Video"
        className="w-full h-64 my-4"
        frameBorder="0"
      ></iframe>
      <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">
        View Full Recipe
      </a>
    </div>
  );
};

export default RecipeDetails;
