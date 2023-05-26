import {Product} from '../model/product-schema';

export const getProductsData = (request, response)=>{
    try{
        const products = Product.find({});
        response(200).json(products);
    }
    catch(error){
        response.status(500).json({message : error.message})
    }    
}