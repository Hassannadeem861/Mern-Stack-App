// MINI ROUTER
import Express from "express";
const Router = Express.Router();
import { home, register, login } from "../Controllers/controller.mjs";
// import { authControllers } from "../Controllers/controller.mjs";
import validate from "../middle-wares/validate-middleware.mjs";
import signupSchema from "../Validations/auth_Validations.mjs";

// Router.route("/").get(authControllers.home);
// Router.route("/register").post(
//   validate(signupSchema),
//   authControllers.register
// );
// Router.route("/login").post(authControllers.login);

Router.get("/", home);
Router.post("/register", validate(signupSchema),register);
Router.post("/login", login);

// Router.get("/", (req, res, next) => {
//     res.status(200).send({
//         message: 'This is auth page'
//     });
// });

export default Router;
