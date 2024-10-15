import axios from "../../utils/axios";
import {
  setUser,
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
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const getallroadmaps = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post("/api/v1/admin/updatedroadmap");
    dispatch(setLoading(false))
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
    dispatch(setLoading(false))
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};


export const uploadroadmap = (formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/upload-update-roadmap/`,formdata);
    dispatch(setLoading(false))
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
    dispatch(setLoading(false))
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const uploadportfolio = (formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/createportfolio`,formdata);
    dispatch(setLoading(false))
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};

export const editportfolio = (id , formdata) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/updateportfolio/${id}`,formdata);
    dispatch(setLoading(false))
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};
export const deleteportfolio = (id ) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading to true
    const response = await axios.post(`/api/v1/admin/deleteportfolio/${id}`);
    dispatch(setLoading(false))
    return response.data; // Return the data
  } catch (error) {
    dispatch(setLoading(false)); // Reset loading on error
    throw error; // Throw error to handle it in the component
  }
};