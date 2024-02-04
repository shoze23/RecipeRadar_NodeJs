const express = require("express");
const randomRecipesController = require("../controllers/randomRecipesController");

const router = express.Router();

router.get("/api/random-recipes", randomRecipesController.getRandomRecipes);

module.exports = router;
