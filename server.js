const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./db");

app.get("/", async (req, res) => {
  const results = await db.query("select * from restaurant");
  res.send(results);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
