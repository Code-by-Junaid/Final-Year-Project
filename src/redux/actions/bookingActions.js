import axios from "axios";
import { message } from "antd";

export const getAllBookings=()=>async dispatch=>{
  dispatch({type: 'LOADING' , payload:true})
  try {
      const response = await axios.get('/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
}

export const bookCarWithStripeCheckout = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/bookings/create-checkout-session", reqObj);
    window.location.href = response.data.url; // Redirect to Stripe Checkout
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Stripe Checkout failed. Please try again.");
  }
};

export const getUserBookings = (userId) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get(`/api/bookings/getuserbookings/${userId}`);
    dispatch({ type: "GET_USER_BOOKINGS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Failed to fetch user bookings.");
  }
};