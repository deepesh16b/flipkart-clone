import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { userLogIn, userSignup } from "../controller/user-controller.js";
import {
  getProductById,
  getProductsData,
} from "./../controller/product-controller.js";
import {
  checkout,
  paymentVerification,
} from "../controller/payment-controller.js";
// import cors from "cors";

const router = express.Router();

console.log("before mongodb req. , inside route");
router.post("/signup", userSignup);
router.post("/login", userLogIn);
router.get("/products", getProductsData);
router.get("/product/:id", getProductById);

router.post("/checkout",checkout);
router.post("/paymentVerification", paymentVerification);

export default router;
