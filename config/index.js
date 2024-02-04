require("dotenv").config();

const config = {
  apiKey: process.env.SPOONACULAR_API_KEY,
  port: process.env.PORT || 8080,
};

module.exports = config;
