const axios = require("axios");
const config = require("../config");

const SPOONACULAR_API_URL = "https://api.spoonacular.com/recipes";

async function fetchRecipeInstructionFromSpoonacular(recipeId) {
  try {
    const response = await axios.get(
      `${SPOONACULAR_API_URL}/${recipeId}/analyzedInstructions`,
      {
        params: {
          apiKey: config.apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch recipe details from Spoonacular API");
  }
}

module.exports = {
  fetchRecipeInstructionFromSpoonacular,
};
