const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const databaseConnect = require("./config/database");
app.get("/", (req, res) => {
  res.send("welcome to backend homepage");
});

databaseConnect();
dotenv.config({
  path: "backend/config/config.env",
});
app.listen(PORT, console.log(`server is running on ${PORT}`));
