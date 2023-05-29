
import express from 'express';
import { userLogIn, userSignup } from "../controller/user-controller.js";
import { getProductById, getProductsData } from './../controller/product-controller.js';

const router = express.Router();

console.log("before mongodb req. , inside route");
router.post("/signup",  userSignup);
router.post('/login', userLogIn);
router.get('/products', getProductsData);
router.get('/product/:id', getProductById);
export default router;
