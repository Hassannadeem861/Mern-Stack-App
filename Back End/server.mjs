console.log(`MERN STACK APP IS RUNNING`);
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./Router/auth.mjs";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json()); // body parser



app.use("/api/v1/auth", authRouter);



// app.get("/", (req, res) => {
 
// });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
