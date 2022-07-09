// view engines - ejs - npm install ejs

// setting an express app
const express = require("express");
const app = express();

// setting up the view engine - ejs
app.set("view engine", "ejs");

// if we change the name of the 'views' folder
// app.set('views', 'newFolderName')

// listens for request

app.listen(3000, "localhost", () => {
  console.log("listening");
});

// routing

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "lorem78",
      snippet:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, sapiente",
    },
    {
      title: "lorem891",
      snippet:
        "recusandae tempore aperiam nihil atque maiores id soluta laudantium necessitatibus",
    },
    {
      title: "lorem67",
      snippet:
        "  aliquam consectetur reiciendis libero vero, nam quaerat quod possimus sequi?",
    },
  ];
  console.log(blogs);

  res.render("home", { head: "home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { head: "about" });
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
