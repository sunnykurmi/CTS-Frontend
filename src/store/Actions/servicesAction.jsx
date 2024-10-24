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

export const cssProfilePayment = (formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/submit-css-profile`,formData);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const cssProfilePaymentSuccess = (id, user) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/payment-success-cssprofile/${id}`, user);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const SATExamPayment = (formData) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/submit-examprep`,formData);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};

export const ExamPaymentSuccess = (id, user) => async (dispatch) => {
  try {
    const order = await axios.post(`/api/v1/services/payment-success-examprep/${id}`, user);
    return order.data;
  } catch (error) {
    console.log(error);
  }
};
