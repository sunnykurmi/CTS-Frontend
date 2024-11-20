import axios from "../../utils/axios";

export const SatPracticePayment = (formData) => async (dispatch) => {
    try {
      const order = await axios.post(`/api/v1/satpractice/submit-sat-practice`,formData);
      return order.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const SatPracticePaymentSuccess = (id, user) => async (dispatch) => {
    try {
      const order = await axios.post(`/api/v1/satpractice/payment-success-sat-practice/${id}`, user);
      return order.data;
    } catch (error) {
      console.log(error);
    }
  };
  
