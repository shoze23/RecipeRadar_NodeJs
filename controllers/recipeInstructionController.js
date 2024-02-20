const {
  fetchRecipeInstructionFromSpoonacular,
} = require("../services/spoonacularInstructionService");

async function getRecipeInstruction(req, res) {
  try {
    const { id } = req.params; // Extract the 'id' parameter from the request URL
    const recipeDetails = await fetchRecipeInstructionFromSpoonacular(id);
    res.json(recipeDetails);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  getRecipeInstruction,
};
