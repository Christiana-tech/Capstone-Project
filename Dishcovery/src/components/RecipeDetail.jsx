
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../utils/api";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const results = await fetchRecipes(""); 
      const selectedRecipe = results?.find((r) => r.idMeal === id);
      setRecipe(selectedRecipe);
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <p>Loading recipe...</p>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-4" />
      <h3 className="text-lg font-semibold">Ingredients</h3>
      <ul className="list-disc ml-6 mb-4">
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key, index) => (
            <li key={index}>{recipe[key]}</li>
          ))}
      </ul>
      <h3 className="text-lg font-semibold">Instructions</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <iframe
          src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
          title="Recipe Video"
          className="w-full h-64 mt-4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default RecipeDetails;
