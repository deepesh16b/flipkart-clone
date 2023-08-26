import dotenv from "dotenv";
dotenv.config();

import Product from './../model/product-schema.js';

export const getProductsData = async (request, response)=>{
    // response.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    try{
        const products = await Product.find({});
        response.status(200).json(products);
    }
    catch(error){
        response.status(500).json({message : error.message})
    }    
}
export const getProductById = async (request, response)=>{
    // response.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL);
    try{
        const id = request.params.id;
        const product = await Product.findOne({'id' : id});
        response.status(200).json(product);
    }
    catch(error){
        response.status(500).json({message : error.message})
    }    
}