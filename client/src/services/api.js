import axios from 'axios';
import { URL } from '../serverLink';
// const URL =  "https://flipkart-backend-lf47.onrender.com" ;
// const URL = "http://localhost:8000";
// const URL =  "https://flipkart-clone-psi.vercel.app";

export const authenticateSignup = async (userData)=>{
    try{
        console.log('api.js: ', userData);
        return await axios.post(`${URL}/signup`, userData);
    }catch(error){
        console.log('error while calling signup api',error);
        return error.response;
    }
};

export const authenticateLogin = async (userData)=>{
    try{
        console.log(userData);
        return await axios.post(`${URL}/login`, userData);
    }catch(error){
        console.log('error while calling login api ',error);
        return error.response;
    }
};

// export  const checkoutFun = async (amount) => {
//     try {
//         let response = await axios.post(`${URL}/payment`, data);
//         return response.data;
//     } catch (error) {
        
//         console.log('Error', error);
//     }
// }