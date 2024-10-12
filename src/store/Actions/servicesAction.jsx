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

export const commonapppayment = (formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/submit-common-app`,formData);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const commonapppaymentsuccess = (id, user) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/payment-success-commonapp/${id}`, user);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};
