import axios from 'axios';
const URL = "https://localhost:8000/"
export const authenticatesSignup = async (userData)=>{
    try{
        return await axios.post(`${URL}signup`, userData);
    }catch(error){
        console.log(error);
    }
};

export default authenticatesSignup;