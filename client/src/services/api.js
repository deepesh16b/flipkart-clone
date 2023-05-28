import axios from 'axios';
const URL = 'https://clever-underwear-toad.cyclic.app/' ||  "https://flipkart-backend-lf47.onrender.com" || "http://localhost:8000" ;


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