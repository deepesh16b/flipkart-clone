
import express from 'express';
import { userLogIn, userSignup } from "../controller/user-controller.js";
import { getProductById, getProductsData } from './../controller/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

console.log("before mongodb req. , inside route");
router.post("/signup",  userSignup);
router.post('/login', userLogIn);
router.get('/products', getProductsData);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;
