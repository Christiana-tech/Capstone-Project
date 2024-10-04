export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
   try{
    const response= await fetch(url);
    const data= await response.json();

    const recipes = data?.meals?.slice(0,limit) || [];

    return recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
    }

    export async function fetchRecipe(id) {
      
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
    
      
        return data?.meals?.[0] || null;
      } catch (error) {
        console.error("Error fetching recipe:", error);
        return null;
      }
    }
    