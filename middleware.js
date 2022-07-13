// view engines - ejs - npm install ejs and middlewares

// setting an express app
const express = require("express");
const app = express();

// importing the morgan middleware
const morgan = require("morgan");

// setting up the view engine - ejs
app.set("view engine", "ejs");

// if we change the name of the 'views' folder
// app.set('views', 'newFolderName')

// listens for request

app.listen(3000, "localhost", () => {
  console.log("listening");
});

// creating a few middleware(s)

app.use((req, res, next) => {
  console.log("\nNEW REQUEST RECEIVED");
  console.log("host: " + req.hostname);
  console.log("path: " + req.path);
  console.log("method: " + req.method);
  next(); // what next() does is, it tells the middleware that the function has completely run and now its time to move to the next middleware
  // it is necessary because, since we are not sending any response, the middleware feels lost with no idea what to do next
});

app.use((req, res, next) => {
  console.log("\nIN THE NEXT MIDDLEWARE");
  next();
});

// 'morgan' middleware - used to log out details of the request

app.use(morgan("dev")); // read more on the documentation of npm

// 'static' middleware to be make use of static files on browser

app.use(express.static("public"));

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
