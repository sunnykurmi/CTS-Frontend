import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import {
  setUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import Cookies from "js-cookie";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get("/api/v1/user/user");
    console.log(data);
    dispatch(setUser(data.user));
   return data;
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/v1/user/signup", user);
    dispatch(setUser(data.user));
  } catch (error) {
    dispatch(signuperror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/v1/user/signin", user);
    document.cookie = `token=${data.token}`;
    await dispatch(setUser(data.user));
  } catch (error) {
    console.log(error);
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/v1/user/signout");
    Cookies.remove("jwtToken");
    dispatch(removeUser());
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const avatar = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/user/avatar/${id}`, formData);
  } catch (error) {
    // Handle error
  }
};

export const editprofile = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/api/v1/user/edituser/${id}`, formData);
  } catch (error) {
    // Handle error
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

export const forgotpassword = (data, navigate) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const {id , password} = data;
    await axios.post(`/api/v1/user/forget-link/${id}`,{password});
    dispatch(setLoading(false));
    alert("Password Changed successfully");
    navigate("/login");
  } catch (error) {
    dispatch(signinerror(error.response.data.message));
    dispatch(setLoading(false));
  }
};


export const addeducation = (formData, id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.post(`/api/v1/user/edituser/${id}/education`, formData);
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
  }
};
