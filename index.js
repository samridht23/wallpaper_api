const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hi this is test1");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is runnning at 3000");
});
