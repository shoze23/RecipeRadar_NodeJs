const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const indexRouter = require("./routes/indexRouter");
const searchRoutes = require("./routes/searchRoutes");
const recipeDetailsRoutes = require("./routes/recipeDetailsRoutes");
const randomRecipesRoutes = require("./routes/randomRecipesRoutes");
const recipeInstructionRoutes = require("./routes/recipeInstructionRoutes");
const ingredientsRoutes = require("./routes/ingredientsRouter");
const fiveRecipeRoutes = require("./routes/fiveRecipesRoutes");

const app = express();

app.set("port", config.port);

app.use(cors());

app.use(bodyParser.json());

app.use(indexRouter);
app.use(searchRoutes);
app.use(recipeDetailsRoutes);
app.use(recipeInstructionRoutes);
app.use(randomRecipesRoutes);
app.use(ingredientsRoutes);
app.use(fiveRecipeRoutes);

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
