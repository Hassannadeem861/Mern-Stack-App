// MINI ROUTER
import Express from "express";
const Router = Express.Router();
// import authControllers from "../Controllers/controller.mjs";
import { home, register, login } from "../Controllers/controller.mjs";
// import register from "../Controllers/controller.mjs";

Router.get("/", home);
Router.post("/register", register);
Router.post("/login", login);

// Router.get("/", (req, res, next) => {
//     res.status(200).send({
//         message: 'This is auth page'
//     });
// });

export default Router;
