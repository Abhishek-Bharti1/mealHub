export const fetchRecipes = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    return response.json();
  };
  