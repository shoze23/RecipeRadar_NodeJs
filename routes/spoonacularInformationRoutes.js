const express = require("express");
const spoonacularInformationController = require("../controllers/spoonacularInformationController");

const router = express.Router();

// Define route
router.get(
  "/api/recipes/information",
  spoonacularInformationController.fetchRecipesInformationAPI
);

module.exports = router;
