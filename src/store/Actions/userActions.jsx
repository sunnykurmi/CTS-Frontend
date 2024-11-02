import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import Cookies from "js-cookie";
import { getBearerToken } from "../../utils/auth";

export const asynccurrentUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post(
      "/api/v1/user/user",
      {},
      getBearerToken()
    );
    dispatch(saveUser(data.user));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const asyncsignup = (user) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/v1/user/signup", user);
    localStorage.setItem("token", data.token);
    dispatch(saveUser(data.user));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(signuperror(error.response.data.message));
  }
};

export const asyncsignin = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/v1/user/signin", credentials);
    localStorage.setItem("token", data.token);
    dispatch(saveUser(data.user));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(signinerror(error.response.data.message));
  }
};

export const asyncremoveUser = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    localStorage.removeItem("token");
    dispatch(removeUser());
    await axios.post("/api/v1/user/signout", {}, getBearerToken());
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

// Update Avatar
export const avatar = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/avatar/${id}`, formData, getBearerToken());
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// Edit Profile
export const editprofile = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/edituser/${id}`, formData, getBearerToken());
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const sendmail = (email, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/v1/user/send-mail", email);
    dispatch(setLoading(false));
    alert("Mail sent successfully");
    navigate("/login");
  } catch (error) {
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

export const sendivyform = (formData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/v1/user/submit-ivy-form", formData);
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

export const forgotpassword = (data, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { id, password } = data;
    await axios.post(`/api/v1/user/forget-link/${id}`, { password });
    dispatch(setLoading(false));
    alert("Password Changed successfully");
    navigate("/login");
  } catch (error) {
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

// Reset Password
export const resetPassword = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/resetpassword/${id}`, formData, getBearerToken());
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// Add Education
export const addEducation = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/edituser/${id}/education`, formData, getBearerToken());
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// Add Achievement
export const addAchievement = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/edituser/${id}/achievement`, formData, getBearerToken());
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

// Update Social Media
export const updateSocialMedia = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/edituser/${id}/socialmedia`, formData, getBearerToken());
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};