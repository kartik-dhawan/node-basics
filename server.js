const http = require("http");

// creating a server

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // sending a response
  //    setting up header
  //    res.setHeader("Content-type", "text/plain");
  res.setHeader("Content-type", "text/html");

  //    writing the response
  //    res.write("hello, city-zens");
  res.write("<head rel='stylesheet' href='#'></head>");
  res.write("<h1>Hello City-zens</h1>");

  //    ending the response editing
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000 now");
});
