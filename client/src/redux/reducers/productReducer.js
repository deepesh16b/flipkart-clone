import * as actionTypes from "../constants/actionTypes";

export const getProductsReducer = (state={products:[]}, action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_SUCCESS:
            return {products : action.payload}
        case actionTypes.GET_PRODUCT_FAIL:
            return {error : action.payload}
        default:
            return state
    }
}