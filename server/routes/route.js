
import express from 'express';
import { userLogIn, userSignup } from "../controller/user-controller.js";

const router = express.Router();

console.log("before mogodb req. , inside route");
router.post("/signup",  userSignup);
router.post('/login', userLogIn)

export default router;
