console.log(`MERN STACK APP IS RUNNING`);
import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import authRouter from "./Router/auth.mjs";
import connectDB from "./Utils/db.mjs";

const app = express();
dotenv.config();
// app.use(cors());
app.use(express.json()); // Middle ware body parser

app.use("/api/v1/auth", authRouter);

app.route("/").get((req, res) => {
  res.status(200).send("This is home page");
});

const PORT = process.env.PORT || 5002;
connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
});
