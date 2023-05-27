import Product from './../model/product-schema.js';

export const getProductsData = async (request, response)=>{
    try{
        const products = await Product.find({});
        response.status(200).json(products);
    }
    catch(error){
        response.status(500).json({message : error.message})
    }    
}