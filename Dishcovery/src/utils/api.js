import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=rice";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}${query}`);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
