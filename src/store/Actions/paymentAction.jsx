import axios from "../../utils/axios";

export const sendpayment = (id) => async (dispatch) => {
    try {
      const order = await axios.post(`/api/v1/payment/create-order/${id}`);
        return order.data;
    } catch (error) {
     console.log(error);
    }
  };

export const verifypayment = () => async (dispatch) => {
    try {
      await axios.post(`/api/v1/payment/verify-payment`);
    } catch (error) {
     console.log(error);
    }
  };