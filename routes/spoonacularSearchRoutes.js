const express = require("express");
const spoonacularSearchController = require("../controllers/spoonacularSearchController");

const router = express.Router();

router.get("/api/recipes/search", spoonacularSearchController.searchRecipesAPI);

module.exports = router;
