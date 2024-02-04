const axios = require("axios");
const config = require("../config");

const SPOONACULAR_API_URL = "https://api.spoonacular.com/recipes";

async function fetchRecipesFromSpoonacular(query, searchUrl) {
  try {
    const response = await axios.get(`${SPOONACULAR_API_URL}${searchUrl}`, {
      params: {
        apiKey: config.apiKey,
        ...query,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recipes from Spoonacular API");
  }
}

module.exports = {
  fetchRecipesFromSpoonacular,
};
