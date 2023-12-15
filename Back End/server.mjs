console.log(`MERN STACK IS RUNNING`);
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); // body parser

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/v1/linkedin", (req, res, next) => {
  res.status(200).send("This is linkedin page");
});

app.get("/api/v1/about", (req, res, next) => {
  res.status(200).send(`This is about page`);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
