import axios from "../../utils/axios";
import {
  saveUser,
  removeUser,
  signuperror,
  signinerror,
  setLoading,
} from "../Reducers/userSlice";
import Cookies from "js-cookie";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post("/api/v1/user/user");
    dispatch(saveUser(data.user));
  } catch (error) {
    dispatch(setLoading(false));
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/v1/user/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signuperror(error.response.data.message));
    dispatch(setLoading(false));
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    await axios.post("/api/v1/user/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
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