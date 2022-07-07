// sending an html file as response from the server and also routing
// redirecting

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./html/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/home":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // redirecting from 'about-me' to 'about'
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      res.statusCode = 404;
      path += "error.html";
      break;
  }

  console.log(req.url);

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("error + ", err);
      res.end();
    } else {
      res.setHeader("Content-type", "text/html");
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening");
});
