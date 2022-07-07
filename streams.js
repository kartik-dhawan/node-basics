const fs = require("fs");

// readstream
const readStream = fs.createReadStream("./files/file2.txt", {
  encoding: "utf8", // converts buffer chunk into readable format
});

// write stream
const writeStream = fs.createWriteStream("./files/file3.txt"); // creates a file 3

readStream.on("data", (chunk) => {
  // read
  console.log("-----NEW CHUNK-----");
  console.log(chunk);

  // write
  writeStream.write("\n\n\n====NEW CHUNK====\n\n\n");
  writeStream.write(chunk);
});

// readStream.pipe(writeStream);

// .pipe does the same work as that of getting chunks from read stream and writing it using write stream just in a single line
