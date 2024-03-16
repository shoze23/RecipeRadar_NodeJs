const {
  fetchRecipesFromSpoonacular,
} = require("../services/spoonacularService");

async function getRecipeByIngredient(req, res) {
  try {
    const { number, ingredients } = req.query;
    const queryParameters = { number, ingredients };
    const searchUrl = "/findByIngredients";

    const recipes = await fetchRecipesFromSpoonacular(
      queryParameters,
      searchUrl
    );
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  getRecipeByIngredient,
};
