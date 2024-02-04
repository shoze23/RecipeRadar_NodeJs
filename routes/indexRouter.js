const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const port = req.app.get("port");
  res.send(`The server is running on port ${port}.`);
});

module.exports = router;
