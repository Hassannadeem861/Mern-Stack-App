// MINI ROUTER
import Express from "express";
const Router = Express.Router();
import contactForm from "../Controllers/contact.mjs";

Router.route("/contact").post(contactForm);

export default Router;

