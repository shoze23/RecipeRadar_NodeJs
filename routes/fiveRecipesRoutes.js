const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.get("/api/five-recipes", (req, res) => {
  const filePath = path.join(__dirname, "recipe.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    const jsonData = JSON.parse(data);

    res.json(jsonData);
  });
});

module.exports = router;
