import axios from "axios";

const apiKey = import.meta.env.VITE_MEALDB_API_KEY;

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}${query}`);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
