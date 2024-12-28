import axios from "../../utils/axios";
import { getBearerToken } from "../../utils/auth";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";

export const getallusers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/getallusers", 
      {}, 
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.users;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallroadmaps = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/updatedroadmap",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.roadmaps;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getpendingroadmap = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/pendingroadmap",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const uploadroadmap = (formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/upload-update-roadmap/`,
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallinternships = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allinternship",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};


export const markcomplete = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/complete-internship",
      {
        id,
      },
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const uploadportfolio = (formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/createportfolio`,
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const editportfolio = (id, formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/updateportfolio/${id}`,
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const deleteportfolio = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/deleteportfolio/${id}`,
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

////////////////////////////////////////exam exam /////////////////////////////////////

export const getallexams = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(
      "/api/v1/user/exam-prep/exams",
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.exams;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const addexam = (formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/create-exam`,
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const editexam = (id, formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/update-exam/${id}`,
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const deleteexam = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      `/api/v1/admin/delete-exam/${id}`,
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

///////////////////////////////Payment routes //////////////////////////////////////

export const getallportfoliopayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allportfolio_pay",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.Portfoliopay;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallessaypayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allessay_pay",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.essaypay;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallcsspayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allcssprofile_pay",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.cssprofile;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallcommonapppayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allcommonapp_pay",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.commonapp;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const getallexampreppayments = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/allexamprep_pay",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.examprep;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};


export const getallivyforms = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/getall_ivy_forms",
      {},
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.forms;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const sendivymail = (formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/send_ivy_form_mail",
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.forms;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};

export const removeivyapproval = (formdata) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(
      "/api/v1/admin/remove_ivy_approval",
      formdata,
      getBearerToken()
    );
    dispatch(setLoading(false));
    return response.data.forms;
  } catch (error) {
    dispatch(setLoading(false));
    throw error;
  }
};




