// file systems and operations

const fs = require("fs");

// reading a file
fs.readFile("./files/file1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("reading a file");
    console.log(data); // will return data in 'Buffer' format
    console.log(data.toString()); // returns data in string format
  }
});

// writing a file
fs.writeFile("./files/file2.txt", "HELLO, MY NAME IS THOMAS", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("./files/file2.txt", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("writing a file");
        console.log(data.toString());
      }
    });
  }
});

// creating and deleting a directory
if (!fs.existsSync("./svgs")) {
  fs.mkdir("./svgs", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./svgs", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder removed");
    }
  });
}

// deleting a file
if (fs.existsSync("./files/file2.txt")) {
  fs.unlink("./files/file2.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
