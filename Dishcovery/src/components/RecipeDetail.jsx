import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        console.log("Recipe data:", response.data.meals[0]); 
                setRecipe(response.data.meals[0]);
      })
      .catch(error => console.error("Error fetching recipe details:", error));
  }, [id]);

  if (!recipe) return <p>Loading...</p>; 

 
  const ingredients = Object.keys(recipe)
    .filter(key => key.startsWith("strIngredient") && recipe[key])
    .map((key, index) => ({
      ingredient: recipe[key],
      measure: recipe[`strMeasure${index + 1}`] || "",
    }));

  const instructions = recipe.strInstructions
    ? recipe.strInstructions.split(".").map(step => step.trim()).filter(step => step)
    : [];


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-56 h-25  rounded mb-4" />
      <h3 className="text-xl font-extrabold mt-10 text-green-600 ">Ingredients:</h3>
      <ul className="list-disc  flex-wrap gap-3 ml-6 mb-6  text-white">
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.measure} {item.ingredient}
          </li>
        ))}
      </ul>
       
      <h3 className="text-xl font-extrabold mt-10 mb-2 text-green-600">Preparation Instructions:</h3>
      <ol className="list-decimal list-inside space-y-2">
        {instructions.map((step, index) => (
          <li key={index} className="text-white">
            {step}.
          </li>
        ))}
      </ol>
      {recipe.strYoutube && (
        <iframe
          src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
          title="Recipe Video"
          className="w-full h-64 mt-20"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

       
       {recipe.strSource && (
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-4 block"
        >
          View Full Recipe on TheMealDB
        </a>
      )}

    </div>
  );
};

export default RecipeDetails;
