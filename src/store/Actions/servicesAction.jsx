import axios from "../../utils/axios";

export const essaypayment = (formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/submit-essay`,formData);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const essaypaymentsuccess = (id, user) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/payment-success-essay/${id}`, user);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};
