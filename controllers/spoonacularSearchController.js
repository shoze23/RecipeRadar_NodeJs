const { searchRecipes } = require("../services/spoonacularSearchService");

async function searchRecipesAPI(req, res) {
  try {
    const params = req.query;
    const result = await searchRecipes(params);
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  searchRecipesAPI,
};
