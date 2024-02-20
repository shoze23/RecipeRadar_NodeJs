const express = require("express");
const recipeInstructionController = require("../controllers/recipeInstructionController");

const router = express.Router();

// Define a route that includes the 'id' parameter
router.get(
  "/api/recipe-instruction/:id",
  recipeInstructionController.getRecipeInstruction
);

module.exports = router;
