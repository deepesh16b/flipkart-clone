
import express from 'express';
import { userSignup } from "../controller/user-controller.js";

const router = express.Router();

console.log("before mogodb req. , inside route");
router.post("/signup", () => userSignup);

export default router;
