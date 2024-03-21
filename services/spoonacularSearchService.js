const axios = require("axios");
const config = require("../config");

async function searchRecipes(params) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          apiKey: config.apiKey2,
          ...params,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to search recipes using Spoonacular API");
  }
}

module.exports = {
  searchRecipes,
};
