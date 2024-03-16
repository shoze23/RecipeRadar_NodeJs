const express = require("express");
const  recipeByIngredientsController= require("../controllers/recipeByIngredientsController");

const router = express.Router();

router.get("/api/recipe-by-ingredients", recipeByIngredientsController.getRecipeByIngredient);

module.exports = router;
