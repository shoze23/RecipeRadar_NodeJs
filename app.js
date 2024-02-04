const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const indexRouter = require("./routes/indexRouter");
const searchRoutes = require("./routes/searchRoutes");
const randomRecipesRoutes = require("./routes/randomRecipesRoutes");

const app = express();

app.set("port", config.port);

app.use(bodyParser.json());

app.use(indexRouter);
app.use(searchRoutes);
app.use(randomRecipesRoutes);

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
