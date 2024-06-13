const express = require("express");

require('dotenv').config();

const app = express();//variable

const port = 4000;//variable

app.get("/", (req, res) => {  //if any request comes at homeroute / then we call a callback function having req and res
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>twitter</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h1>pranay prasoon</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

