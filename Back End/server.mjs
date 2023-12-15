console.log(`MERN STACK IS RUNNING`);
import express from "express";
import dotenv from 'dotenv';
import cors from "cors";




const app = express();
dotenv.config();
app.use(cors());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/linkedin", (req, res, next) => {
 res.send("Linkedin Page")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
