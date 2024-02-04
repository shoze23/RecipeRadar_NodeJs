require("dotenv").config();

const config = {
  apiKey: process.env.SPOONACULAR_API_KEY,
  port: process.env.PORT || 3000,
};

module.exports = config;
