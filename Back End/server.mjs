console.log(`MERN STACK APP IS RUNNING`);
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// import parseJson from 'parse-json';
import cookieParser from "cookie-parser";
import authRouter from "./Router/auth.mjs";
import contactRouter from "./Router/contact.mjs";
import connectDB from "./Utils/db.mjs";
import errorMidleWare from "./middle-wares/error-middleware.mjs";


const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true
} 

app.use(cors(corsOptions));
app.use(express.json()); // Middle ware JSON body parser
// Body parser middleware
app.use(bodyParser.json()); // JSON body parser
dotenv.config();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// parseJson(json, 'foo.json');


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
