import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";

export const getallusers = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/getallusers");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.users; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallroadmaps = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/updatedroadmap");
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getpendingroadmap = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/pendingroadmap");
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const uploadroadmap = (formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(
      `/api/v1/admin/upload-update-roadmap/`,
      formdata
    );
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallinternships = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/allinternship");
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const uploadportfolio = (formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(
      `/api/v1/admin/createportfolio`,
      formdata
    );
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const editportfolio = (id, formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(
      `/api/v1/admin/updateportfolio/${id}`,
      formdata
    );
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};
export const deleteportfolio = (id) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/deleteportfolio/${id}`);
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

////////////////////////////////////////exam exam /////////////////////////////////////

export const getallexams = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.get("/api/v1/user/exam-prep/exams");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.exams; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const addexam = (formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/create-exam`, formdata);
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const editexam = (id, formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(
      `/api/v1/admin/update-exam/${id}`,
      formdata
    );
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};
export const deleteexam = (id) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/delete-exam/${id}`);
    dispatch(setLoading(false));
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

///////////////////////////////Payment routes //////////////////////////////////////

export const getallportfoliopayments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/allportfolio_pay");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.Portfoliopay; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallessaypayments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/allessay_pay");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.essaypay; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallcsspayments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/allcssprofile_pay");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.cssprofile; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallcommonapppayments = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/allcommonapp_pay");
    dispatch(setLoading(false)); // Reset loading on success
    return response.data.commonapp; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

///////////////////////////////Payment routes //////////////////////////////////////
