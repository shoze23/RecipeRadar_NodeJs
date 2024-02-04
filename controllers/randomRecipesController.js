const {
  fetchRecipesFromSpoonacular,
} = require("../services/spoonacularService");

async function getRandomRecipes(req, res) {
  try {
    const { number, limitLicense } = req.query;
    const queryParameters = { number, limitLicense };
    const searchUrl = "/random";

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
  getRandomRecipes,
};
