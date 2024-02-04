const express = require("express");
const searchController = require("../controllers/searchController");

const router = express.Router();

router.get("/api/search-recipes", searchController.searchRecipes);

module.exports = router;
