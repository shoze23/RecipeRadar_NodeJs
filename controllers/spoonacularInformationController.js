const {
  fetchRecipesInformation,
} = require("../services/spoonacularInformationService");

async function fetchRecipesInformationAPI(req, res) {
  try {
    const { ids } = req.query;
    const idsArray = ids.split(",").map((id) => parseInt(id)); // Convert comma-separated string to array of IDs
    const result = await fetchRecipesInformation(idsArray);
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  fetchRecipesInformationAPI,
};
