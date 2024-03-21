const express = require("express");
const spoonacularConversionController = require("../controllers/spoonacularConversionController");

const router = express.Router();

router.get(
  "/api/recipes/convert",
  spoonacularConversionController.convertIngredientAPI
);

module.exports = router;
