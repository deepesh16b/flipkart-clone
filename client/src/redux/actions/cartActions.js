
import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import { URL } from './../../serverLink';
// const url = "https://flipkart-backend-lf47.onrender.com";
// const url =  "https://flipkart-clone-psi.vercel.app";
// const url = "http://localhost:8000";
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(URL + `/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
};

export const resetCart = () => (dispatch) => {
  dispatch({ type: actionTypes.RESET_CART });
};
