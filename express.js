// express.js tut

const express = require("express");
const app = express();

// listens for request

app.listen(3000, "localhost", () => {
  console.log("listening");
});

// routing

app.get("/", (req, res) => {
  res.sendFile("./html/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./html/about.html", { root: __dirname });
});

// redirecting

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// error or 404

app.use((req, res) => {
  res.sendFile("./html/error.html", { root: __dirname });
});
