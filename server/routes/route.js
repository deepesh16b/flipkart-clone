
import express from 'express';
import { userLogIn, userSignup } from "../controller/user-controller.js";
import { getProductById, getProductsData } from './../controller/product-controller.js';
import { checkout, paymentVerification } from '../controller/payment-controller.js';

const router = express.Router();

console.log("before mongodb req. , inside route");
router.post("/signup",  userSignup);
router.post('/login', userLogIn);
router.get('/products', getProductsData);
router.get('/product/:id', getProductById);

router.post('/checkout', checkout);
router.post('/paymentVerification', paymentVerification);

// router.post('/paymentsuccess', (req, res) => {
//     res.redirect(`${process.env.FRONTEND_URL}/paymentsuccess?reference=${req.query.reference}`);
//   });

export default router;
