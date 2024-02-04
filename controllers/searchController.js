const {
  fetchRecipesFromSpoonacular,
} = require("../services/spoonacularService");

async function searchRecipes(req, res) {
  try {
    const { cuisine, ingredients, type, titleMatch } = req.query;
    const queryParameters = { cuisine, ingredients, type, titleMatch };
    const searchUrl = "/complexSearch";

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
  searchRecipes,
};
