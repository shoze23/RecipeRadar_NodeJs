require("dotenv").config();

const config = {
  apiKey: process.env.SPOONACULAR_API_KEY,
  apiKey2: process.env.SPOONACULAR_API_KEY2,
  port: process.env.PORT || 8080,
};

module.exports = config;
