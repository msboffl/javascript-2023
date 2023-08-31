import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();

const PORT = 5001;

app.use(bodyParser.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
