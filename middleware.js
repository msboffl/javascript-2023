import express from "express";

const app = express();

const myLogger = (req, res, next) => {
  console.log("Logged");
  next();
};

app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001);
