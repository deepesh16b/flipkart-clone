import axios from 'axios';
const URL = "http://localhost:8000" || "https://flipkart-backend-lf47.onrender.com";


export const authenticateSignup = async (userData)=>{
    try{
        console.log(userData);
        return await axios.post(`${URL}/signup`, userData);
    }catch(error){
        console.log('error while calling signup api ',error);
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