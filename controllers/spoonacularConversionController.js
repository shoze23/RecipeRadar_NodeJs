const {
  convertIngredient,
} = require("../services/spoonacularConversionService");

async function convertIngredientAPI(req, res) {
  try {
    const { ingredientName, sourceAmount, sourceUnit, targetUnit } = req.query;
    const result = await convertIngredient(
      ingredientName,
      sourceAmount,
      sourceUnit,
      targetUnit
    );

    // Extracting only the targetAmount from the Spoonacular API response
    const targetAmount = result.targetAmount;

    // Sending only the targetAmount to the client
    res.json(targetAmount.toString());
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}

module.exports = {
  convertIngredientAPI,
};
