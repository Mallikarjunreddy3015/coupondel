const express = require("express");
const app = express();
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}


app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.render(path.resolve(__dirname, "../frontend/build/index.html"));
});




module.exports = app;