const stream = require("stream");
const fs = require("fs");

const readableStream = fs.createReadStream("source.txt");
const writableStream = fs.createWriteStream("dest.txt");

readableStream.pipe(writableStream);

readableStream.on("end", () => {
  console.log("Copy Completed");
});
