const axios = require("axios");
const config = require("../config");

async function convertIngredient(
  ingredientName,
  sourceAmount,
  sourceUnit,
  targetUnit
) {
  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/convert",
      {
        params: {
          apiKey: config.apiKey,
          ingredientName,
          sourceAmount,
          sourceUnit,
          targetUnit,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to convert ingredient using Spoonacular API");
  }
}

module.exports = {
  convertIngredient,
};
