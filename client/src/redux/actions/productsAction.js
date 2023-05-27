import axios from 'axios'
import * as actionTypes from '../constants/actionTypes';
const url = 'http://localhost:8000' || 'https://flipkart-backend-lf47.onrender.com';
// const url = 'https://flipkart-backend-lf47.onrender.com";

// An action is just an object that contain type and value and etc.

//  An action with thunk middleware is just an action creator function that fetched data from api and return ands object {type:, value:fetchedData}

// getProducts fun() calling a thunk middleware()
export const getProducts = () => async (dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/products`)
        dispatch({type : actionTypes.GET_PRODUCT_SUCCESS, payload: data })
    }
    catch(error){
        dispatch({type : actionTypes.GET_PRODUCT_FAIL, payload : error.message })
    }
}