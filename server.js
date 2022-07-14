const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/", (req, res) => {
  res.end("hi");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
