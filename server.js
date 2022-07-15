const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./db");

app.get("/", async (req, res) => {
  try {
    const results = await db.query("select * from restaurant");
    res.status(200).json({});
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
