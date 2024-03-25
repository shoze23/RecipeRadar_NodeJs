const axios = require("axios");
const config = require("../config");

async function fetchRecipesInformation(ids) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/informationBulk",
      {
        params: {
          apiKey: config.apiKey3,
          ids: ids.join(","),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Failed to fetch recipes information using Spoonacular API"
    );
  }
}

module.exports = {
  fetchRecipesInformation,
};
