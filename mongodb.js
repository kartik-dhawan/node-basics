// view engines - ejs - npm install ejs and middlewares

// setting an express app
const express = require("express");
const app = express();

// importing mongoose
const mongoose = require("mongoose");

// importing the mongodb model and schema
const Blog = require("./models/blog");

// setting up the view engine - ejs
app.set("view engine", "ejs");

// if we change the name of the 'views' folder
// app.set('views', 'newFolderName')

// 'static' middleware to be make use of static files on browser

app.use(express.static("public"));

// connecting to mongo db
const dbURI =
  "mongodb+srv://<username>:<password>@<clustername>.fbb80.mongodb.net/<databasename>?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3000, "localhost", () => {
      // listens for request only when connection to db is made
      console.log("listening");
    });
  })
  .catch((err) => console.log(err));

// routing

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { head: "about" });
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("home", { head: "Blogs", blogs: result });
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { head: "create" });
});

// redirecting

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// error or 404

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
