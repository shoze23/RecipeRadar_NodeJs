const express = require("express");
const recipeDetailsController = require("../controllers/recipeDetailsController");

const router = express.Router();

// Define a route that includes the 'id' parameter
router.get("/api/recipe-details/:id", recipeDetailsController.getRecipeDetails);

module.exports = router;
