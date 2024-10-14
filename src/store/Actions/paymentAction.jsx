import axios from "../../utils/axios";

export const sendpayment = (id , userid) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/payment/create-order/${id}`,{ userid: userid });
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const paymentsuccess = (id, user) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/payment/paymentsuccess/${id}`, user);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};
