import { Router } from "express";
import { userSignup } from "../controller/user-controller";

Router.post("/signup", (req, res) => userSignup);

export default Router;
