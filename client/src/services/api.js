import axios from 'axios';
const URL = "http://localhost:8000";


export const authenticateSignup = async (userData)=>{
    try{
        console.log(userData);
        return await axios.post(`${URL}/signup`, userData);
    }catch(error){
        console.log(error);
    }
};

export default authenticateSignup;