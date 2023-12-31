console.log(`MERN STACK APP IS RUNNING`);
import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import bodyParser from "body-parser";
// import parseJson from 'parse-json';
import cookieParser from "cookie-parser";
import authRouter from "./Router/auth.mjs";
import contactRouter from "./Router/contact.mjs";
import connectDB from "./Utils/db.mjs";
import errorMidleWare from "./middle-wares/error-middleware.mjs";


const app = express();
// Body parser middleware
app.use(bodyParser.json()); // JSON body parser
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(cookieParser());
app.use(express.json()); // Middle ware JSON body parser
// parseJson(json, 'foo.json');

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/form", contactRouter);
app.use(errorMidleWare);

app.route("/").get((req, res) => {
  res.status(200).send("This is home page");
});

const PORT = process.env.PORT || 3001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`);
  });
});
